import { sort } from '@/store/persons';

describe('persons module', () => {
  describe('sort helper', () => {
    it('sorts items by gender', () => {
      const testingList = [
        {
          gender: 'male',
          name: 'John',
        },

        {
          gender: 'female',
          name: 'Jane',
        },
      ];

      const result = sort(testingList);

      expect(result[0].name).toBe('Jane');
      expect(result[1].name).toBe('John');
    });

    it('sorts DESC by registered date', () => {
      const testingList = [
        {
          gender: 'female',
          name: 'Lucy',
          // 10:00
          registered: '2017-10-10T10:00:00 -02:00',
        },

        {
          gender: 'female',
          name: 'Elsa',
          // 12:00
          registered: '2017-10-10T12:00:00 -02:00',
        },

        {
          gender: 'female',
          name: 'Jane',
          // 11:00
          registered: '2017-10-10T11:00:00 -02:00',
        },
      ];

      const result = sort(testingList);

      expect(result[0].name).toBe('Elsa');
      expect(result[1].name).toBe('Jane');
      expect(result[2].name).toBe('Lucy');
    });

    it('sorts by gender and then DESC registered date', () => {
      const testingList = [
        {
          gender: 'female',
          name: 'Lucy',
          // 10:00
          registered: '2017-10-10T10:00:00 -02:00',
        },

        {
          gender: 'male',
          name: 'Bob',
          // 10:00
          registered: '2017-10-10T10:00:00 -02:00',
        },

        {
          gender: 'female',
          name: 'Elsa',
          // 12:00
          registered: '2017-10-10T12:00:00 -02:00',
        },

        {
          gender: 'male',
          name: 'David',
          // 11:00
          registered: '2017-10-10T11:00:00 -02:00',
        },

        {
          gender: 'female',
          name: 'Jane',
          // 11:00
          registered: '2017-10-10T11:00:00 -02:00',
        },
      ];

      const result = sort(testingList);

      expect(result[0].name).toBe('Elsa');
      expect(result[1].name).toBe('Jane');
      expect(result[2].name).toBe('Lucy');
      expect(result[3].name).toBe('David');
      expect(result[4].name).toBe('Bob');
    });
  });
});
