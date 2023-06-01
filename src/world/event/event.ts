export abstract class Event {
  abstract isTriggered(): boolean;
  abstract commit(): boolean;
  abstract rollback(): boolean;
}
