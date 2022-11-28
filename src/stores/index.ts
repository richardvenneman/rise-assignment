import EventStore from './eventStore';

export type RootStore = {
  eventStore: EventStore;
};

const rootStore: RootStore = {
  eventStore: new EventStore(),
};

export default rootStore;
