import React, { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
    const [fromAmount, setFromAmount] = useState(0); // Store original "From" amount
    const [toAmount, setToAmount] = useState(0); // Store "To" amount
    const [fromCurrency, setFromCurrency] = useState('usd');
    const [toCurrency, setToCurrency] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(fromCurrency);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        // Swap currencies
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        // Swap amounts
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    const convert = (e) => {
        e.preventDefault();
        setConvertedAmount(fromAmount * currencyInfo[toCurrency]);
        setToAmount(fromAmount * currencyInfo[toCurrency]); // Update the 'To' amount
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form onSubmit={convert}>
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={fromAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                selectCurrency={fromCurrency}
                                onAmountChange={(amount) => setFromAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={toAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                selectCurrency={toCurrency}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
