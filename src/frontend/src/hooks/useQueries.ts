import { useMutation } from "@tanstack/react-query";
import { Position } from "../backend";
import { useActor } from "./useActor";

// Submit contact form
export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      message,
    }: {
      name: string;
      phone: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitContact(name, phone, email, message);
    },
  });
}

// Submit job application
export function useSubmitJobApplication() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      experienceYears,
      position,
    }: {
      name: string;
      phone: string;
      experienceYears: bigint;
      position: Position;
    }) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitJobApplication(name, phone, experienceYears, position);
    },
  });
}

export { Position };
