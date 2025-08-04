import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { getWorkspace } from "@/features/workspaces/queries";

interface WorkspaceIdSettingPageProps {
  params: { workspaceId: string };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingPageProps) => {
  const user = getCurrent();

  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
