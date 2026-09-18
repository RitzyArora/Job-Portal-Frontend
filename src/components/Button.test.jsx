import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {vi,expect,test} from "vitest"
import Button from "./Button"
test("calls onClick when button is clicked", async ()=>{
    const user=userEvent.setup()
    const handleClick=vi.fn()
    render(<Button onClick={handleClick}></Button>)
    const button=screen.getByRole("button",{
        name:"Save",
    })
    await user.click(button)

    expect(handleClick).toHaveBeenCalled(1)
})