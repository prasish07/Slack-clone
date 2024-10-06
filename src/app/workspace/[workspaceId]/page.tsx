"use client";

import React from "react";

import { useGetWorkspace } from "@/features/workspaces/api/user-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workspaceId });

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default WorkspaceIdPage;
