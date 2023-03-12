import React from 'react'
import { CURRENCIES } from '../constants'
import { CurrencyProps } from '../types/index'

export default function Currency({ activeCurrency, onCurrency }: CurrencyProps) {

    return (
        <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-white mb-1'>
                Currency
            </label>
            {
                Object.keys(CURRENCIES).map((currency) => (
                    <span onClick={onCurrency(currency)} key={currency} className={`chip ${currency === activeCurrency && 'active'}`}>{currency}</span>
                ))
            }
        </div>
    )
}
