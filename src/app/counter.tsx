"use client"
import {Button} from "@/components/ui/button"
const CounterView = () => {
    const countervalue=0
    const increment = () =>{}
    return(
        <main className="flex min-h-screen flex-col item-center p-24 py-5">
            <div className="py-6 flex gap-6">
                <Button className="py-4 px-3 rounded-md bg-green-700" onClick={increment}>increment</Button>
                <div>Counter Value is {countervalue}</div>
                <Button className="py-4 px-3 rounded-md bg-red -700">decrement</Button>
            </div>
        </main>
    )
}
export default CounterView