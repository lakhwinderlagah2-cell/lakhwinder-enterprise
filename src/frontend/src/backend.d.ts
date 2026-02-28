import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface JobApplication {
    name: string;
    experienceYears: bigint;
    timestamp: Timestamp;
    phone: string;
    position: Position;
}
export type Timestamp = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Timestamp;
    phone: string;
}
export enum Position {
    apprenticeCarpenter = "apprenticeCarpenter",
    siteSupervisor = "siteSupervisor",
    carpenter = "carpenter"
}
export interface backendInterface {
    getAllContacts(): Promise<Array<ContactSubmission>>;
    getAllJobApplications(): Promise<Array<JobApplication>>;
    getContactByTimestamp(timestamp: Timestamp): Promise<ContactSubmission>;
    getJobApplicationByTimestamp(timestamp: Timestamp): Promise<JobApplication>;
    submitContact(name: string, phone: string, email: string, message: string): Promise<void>;
    submitJobApplication(name: string, phone: string, experienceYears: bigint, position: Position): Promise<void>;
}
