"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";

export function SyncUser() {
  const { user } = useUser();
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (!user) return;

    storeUser({
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
    });
  }, [user, storeUser]);

  return null;
}