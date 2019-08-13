import prizeDecisionMaker from '../Helper/PrizeDecisionMaker'


describe('Testing all possible outputs',()=>{
    it('3 slots matched,user wins $100', () => {
        expect(prizeDecisionMaker([1,1,1])).toEqual('Congratulations , You own $100')
    })
    it('2 slots matched consicutively,user wins $20, test 1', () => {
        expect(prizeDecisionMaker([2,2,1])).toEqual('Congratulations , You own $20')
    })
    it('2 slots matched consicutively,user wins $20, test 2', () => {
        expect(prizeDecisionMaker([3,4,4])).toEqual('Congratulations , You own $20')
    })
    it('2 non-consicutive slots matched,user wins $10', () => {
        expect(prizeDecisionMaker([1,3,1])).toEqual('Congratulations , You own $10')
    })
    it('No slots matched,user does ot win prize', () => {
        expect(prizeDecisionMaker([4,3,2])).toEqual('Oops ! Better luck next time')
    })
    it('Invalid input', () => {
        expect(prizeDecisionMaker([])).toEqual('Invalid input')
    })
})

