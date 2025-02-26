'use client'
import { Button, Popover, PopoverTrigger, PopoverContent, Input, Textarea } from '@heroui/react'
import React, { useActionState } from 'react'
import * as actions from '@/actions'

export default function TopicCreateForm() {
  const [state, formAction ] = useActionState(actions.createTopic, {
    errors:{}
  })
  return (
    <div>
      <Popover placement='left'>
        <PopoverTrigger>
            <Button color="primary" variant='bordered'>Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={formAction}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg' >Create a Topic</h3>
            <Input name='name' label="Name" labelPlacement='outside' placeholder='name' isInvalid = {!!state.errors.name} errorMessage = {state.errors.name?.join(', ')} />
            <Textarea name='description' label="Description" labelPlacement='outside' placeholder='describe your topic' isInvalid = {!!state.errors.description} errorMessage = {state.errors.description?.join(', ')}/>
            <Button type="submit">Submit</Button>
          </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
