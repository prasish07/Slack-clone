"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useGetWorkspaces } from "@/features/workspaces/api/user-get-workspaces";
import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
  const router = useRouter();

  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, isLoading, open, setOpen, router]);

  return (
    <div className="flex items-center">
      <UserButton />
    </div>
  );
};

export default Home;
