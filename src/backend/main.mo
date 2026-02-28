import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Timestamp = Int;

  type ContactSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Timestamp;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  type Position = {
    #carpenter;
    #apprenticeCarpenter;
    #siteSupervisor;
  };

  type JobApplication = {
    name : Text;
    phone : Text;
    experienceYears : Nat;
    position : Position;
    timestamp : Timestamp;
  };

  module JobApplication {
    public func compare(a : JobApplication, b : JobApplication) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let contacts = Map.empty<Timestamp, ContactSubmission>();
  let applications = Map.empty<Timestamp, JobApplication>();

  public shared ({ caller }) func submitContact(name : Text, phone : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let contact : ContactSubmission = {
      name;
      phone;
      email;
      message;
      timestamp;
    };
    contacts.add(timestamp, contact);
  };

  public shared ({ caller }) func submitJobApplication(name : Text, phone : Text, experienceYears : Nat, position : Position) : async () {
    let timestamp = Time.now();
    let application : JobApplication = {
      name;
      phone;
      experienceYears;
      position;
      timestamp;
    };
    applications.add(timestamp, application);
  };

  public shared ({ caller }) func getAllContacts() : async [ContactSubmission] {
    contacts.values().toArray().sort();
  };

  public shared ({ caller }) func getAllJobApplications() : async [JobApplication] {
    applications.values().toArray().sort();
  };

  public shared ({ caller }) func getJobApplicationByTimestamp(timestamp : Timestamp) : async JobApplication {
    switch (applications.get(timestamp)) {
      case (null) { Runtime.trap("Application not found") };
      case (?application) { application };
    };
  };

  public query ({ caller }) func getContactByTimestamp(timestamp : Timestamp) : async ContactSubmission {
    switch (contacts.get(timestamp)) {
      case (null) { Runtime.trap("Contact submission not found") };
      case (?contact) { contact };
    };
  };
};
