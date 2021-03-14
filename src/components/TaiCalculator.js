import { useState } from 'react'
import React from 'react'

const TaiCalculator = ({ calculate}) => {
    const [stakes, setStakes] = useState('');
    const [flower, setFlower] = useState('');
    const [hand, setHand] = useState('Mix and Match');
    const [special, setSpecial] = useState('None');
    const [zimo, setZimo] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!stakes) {
            alert('Please enter the stakes!')
            return
        }
        if (!flower) {
            alert('Please enter the Flower/Animal/Wind/Dragon Tai!')
            return
        }

        var handTai = 0;
        var specialTai = special === 'None' ? 0 : 1;
        switch (hand) {
            case 'Mix and Match':
                handTai = 0;
                break;
            case 'Smelly Sequence Hand':
                handTai = 1;
                break;
            case 'Half Flush':
                handTai = 2;
                break;
            case 'Full Flush':
                handTai = 4;
                break;
            case 'Sequence Hand':
                handTai = 4;
                break;
            case 'Sequence Hand + Half Flush':
                handTai = 6;
                break;
            case 'Sequence Hand + Full Flush':
                handTai = 8;
                break;
            case 'Triplets Hand':
                handTai = 2;
                break;
            case 'Triplets Hand + Half Flush':
                handTai = 4;
                break;
            case 'Triplets Hand + Full Flush':
                handTai = 6;
                break;
            default:
                handTai = 0;
                break;
        }

        console.log(handTai);

        var tai = Math.min(parseFloat(flower) + parseFloat(handTai) + parseFloat(specialTai), 5);
        var price = 0;
        if (!zimo) {
            price = 4 * stakes * Math.pow(2, tai - 1);
        } else {
            price = 2 * stakes * Math.pow(2, tai - 1);
        }
        if (tai === 0) {
            price = 0;
        }
        calculate({zimo, price});
    }

    return (
        <div>
            <form className='calculator-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Stakes</label>
                    <input type='text' placeholder='e.g. 0.2' value={stakes} onChange={(e) => setStakes(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Flower/Animal/Wind/Dragon Tai</label>
                    <input type='text' placeholder='e.g. 3' value={flower} onChange={(e) => setFlower(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Hand Combination</label>
                    <select className='form-control' value={hand} onChange={(e) => setHand(e.target.value)}>
                        <option value='Mix and Match'>Mix and Match</option>
                        <option value='Smelly Sequence Hand'>Smelly Sequence Hand</option>
                        <option value='Half Flush'>Half Flush</option>
                        <option value='Full Flush'>Full Flush</option>
                        <option value='Sequence Hand'>Sequence Hand</option>
                        <option value='Sequence Hand + Half Flush'>Sequence Hand + Half Flush</option>
                        <option value='Sequence Hand + Full Flush'>Sequence Hand + Full Flush</option>
                        <option value='Triplets Hand'>Triplets Hand</option>
                        <option value='Triplets Hand + Half Flush'>Triplets Hand + Half Flush</option>
                        <option value='Triplets Hand + Full Flush'>Triplets Hand + Full Flush</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label>Special Cases</label>
                    <select className='form-control' value={special} onChange={(e) => setSpecial(e.target.value)}>
                        <option value='None'>None</option>
                        <option value='Steal Gang'>Steal Gang</option>
                        <option value='Gang Up'>Gang Up</option>
                        <option value='Flower Up'>Flower Up</option>
                        <option value='Hadilao'>Haidilao</option>
                    </select>
                </div>
                <div className='form-control-check'>
                    <label>Zimo</label>
                    <input checked={zimo} type='checkbox' value={zimo} onChange={(e) => setZimo(e.currentTarget.checked)}/>
                </div>

                <input className='btn btn-block' type='submit' value='Calculate'/>
            </form>
        </div>
    )
}

export default TaiCalculator