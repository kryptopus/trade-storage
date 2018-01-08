/* @flow */
import type Trade from "kryptopus-trade"

/**
 * Storage
 */
export interface StorageInterface
{
    /**
     * Save a trade
     *
     * @param   {Trade}     trade   Trade
     */
    save(trade:Trade):void;

    /**
     * Get trades by interval
     *
     * @param   {number}    startTimestamp  Start timestamp
     * @param   {number}    endTimestamp    End timestamp
     * @return  {Trade[]}                   Trades
     */
    getByInterval(startTimestamp:number, endTimestamp:number):Array<Trade>;
}
