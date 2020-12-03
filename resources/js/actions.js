const MemoryActions = {
  flipCard: id => ({
    type: "FLIP_CARD",
    id
  }),

  restart: () => ({
    type: "RESTART_GAME"
  })
};

export default MemoryActions;
