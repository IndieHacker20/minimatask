import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    imageUrl: v.optional(v.string()),
    plan: v.optional(v.string()),
  }).index("by_clerk_id", ["clerkId"]),

  todos: defineTable({
    title: v.string(),
    completed: v.boolean(),
    userId: v.string(),
    priority: v.optional(v.string()),
    dueDate: v.optional(v.string()),
  }).index("by_user", ["userId"]),

  timeboxes: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    start: v.string(),
    end: v.string(),
    userId: v.string(),
    completed: v.boolean(),
  }).index("by_user", ["userId"]),
});