import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");
    
    return await ctx.db
      .query("timeboxes")
      .filter((q) => q.eq(q.field("userId"), identity.subject))
      .collect();
  },
});

export const create = mutation({
  args: { 
    title: v.string(),
    description: v.optional(v.string()),
    start: v.string(),
    end: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");

    await ctx.db.insert("timeboxes", {
      ...args,
      userId: identity.subject,
      completed: false,
    });
  },
});

export const toggle = mutation({
  args: { id: v.id("timeboxes") },
  handler: async (ctx, args) => {
    const timebox = await ctx.db.get(args.id);
    if (!timebox) throw new Error("Timebox not found");
    
    await ctx.db.patch(args.id, {
      completed: !timebox.completed,
    });
  },
});