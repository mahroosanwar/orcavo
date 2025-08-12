import { MoreHorizontalIcon } from "lucide-react";

import { DottedSeparator } from "@/components/dotted-separator";

import { MemberAvatar } from "@/features/members/components/member-avatar";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";

import { TaskActions } from "./task-actions";
import { TaskDate } from "./task-date";

import { Task } from "../types";

interface KanbanCardProps {
  task: Task;
}

export const KanbanCard = ({ task }: KanbanCardProps) => {
  return (
    <div className="bg-white p-2.5 mb-1.5 rounded shadow-sm space-y-3">
      <div className="flex items-start justify-between gap-x-2">
        <p className="text-sm line-clamp-2">{task.name}</p>
        <TaskActions id={task.$id} projectId={task.projectId}>
          <MoreHorizontalIcon className="size-[18px] stroke-1 shrink-0 text-neutral-700 hover:opacity-75 transition" />
        </TaskActions>
      </div>
      <DottedSeparator />
      <div className="flex items-center gap-x-1.5">
        <MemberAvatar
          // @ts-expect-error "assignee" is not in type Task in types.ts but exists in populated data in server/routes in .get()
          name={task.assignee.name}
          fallbackClassName="text-[10px]"
        />
        <div className="size-1 rounded-full bg-neutral-300" />
        <TaskDate value={task.dueDate} className="text-xs" />
      </div>
      <div className="flex items-center gap-x-1.5">
        <ProjectAvatar
          // @ts-expect-error "project" is not in type Task in types.ts but exists in populated data in server/routes in .get()
          name={task.project.name}
          // @ts-expect-error "project" is not in type Task in types.ts but exists in populated data in server/routes in .get()
          image={task.project.imageUrl}
          fallbackClassName="text-[10px]"
        />
        {/* @ts-expect-error "project" is not in type Task in types.ts but exists in populated data in server/routes in .get() */}
        <span className="text-xs font-medium">{task.project.name}</span>
      </div>
    </div>
  );
};
