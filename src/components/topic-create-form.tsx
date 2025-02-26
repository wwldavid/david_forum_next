import { Button, Popover, PopoverTrigger, PopoverContent, Input, Textarea } from '@heroui/react'
import React from 'react'
import * as actions from '@/actions'

export default function TopicCreateForm() {
  return (
    <div>
      <Popover placement='left'>
        <PopoverTrigger>
            <Button color="primary" variant='bordered'>Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={actions.createTopic}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg' >Create a Topic</h3>
            <Input name='name' label="Name" labelPlacement='outside' placeholder='name' />
            <Textarea name='description' label="Description" labelPlacement='outside' placeholder='describe your topic'/>
            <Button type="submit">Submit</Button>
          </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
