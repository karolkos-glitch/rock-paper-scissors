const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = vi
  .fn()
  .mockImplementation(intersectionObserverMock);

export {};
