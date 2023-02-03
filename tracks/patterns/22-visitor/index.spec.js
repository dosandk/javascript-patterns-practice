import {Comment, Visitor} from './solution/index.js';

describe('patterns/visitor', () => {
  it('should be defined', () => {
    const list = new Comment({
      id: "comment-1",
      content: "text content for comment-1",
      children: [
        new Comment({
          id: "comment-1.1",
          content: "text content for comment-1.1",
        }),
        new Comment({
          id: "comment-1.2",
          content: "text content for comment-1.2",
        })
      ]
    });

    list.accept(Visitor);

    expect(list.getSize()).toBe(3);
  });

  // [your tests here]
});

list.accept(Visitor);

console.error(list);
console.error(list.getSize());
