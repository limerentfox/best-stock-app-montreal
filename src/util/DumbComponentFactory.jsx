const DumbComponentFactory = attributes => {
  return attributes.containerItems.map(i => ({ i }));
};

export default DumbComponentFactory;
