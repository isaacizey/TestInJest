import {User,sum} from '../user';

test('add 1+2 to get 3', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,2)).not.toBe(null);
    expect(sum(1,2)).not.toBeUndefined(); 
    
});

test('greater than 2',() => {
    expect(sum(1,2)).toBeGreaterThan(2);
})

test('to be less than 10', () => {
    expect(sum(1,2)).toBeLessThan(10);
})


test('getName', () => {
   const amaUser = new User({firstName:'kevin',lastName:'wan'}); 
   expect(amaUser.name).toBe('kevin wan');
})
