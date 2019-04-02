import {sum} from './sum';

it('sum numbers',()=>{
    expect(sum(1,2)).toEqual(3);
    expect(sum(3,2)).toEqual(5);
});