'use client'
import { Button, Popover, PopoverTrigger, PopoverContent, Input, Textarea, Chip } from '@heroui/react'
import React, { startTransition, useActionState } from 'react'
import * as actions from '@/actions'

export default function TopicCreateForm() {
  const [state, formAction ] = useActionState(actions.createTopic, {
    errors:{}
  })
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      startTransition(() => formAction(formData));
    }
  return (
    <div>
      <Popover placement='left'>
        <PopoverTrigger>
            <Button color="primary" variant='bordered'>Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={handleSubmit} noValidate>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg' >Create a Topic</h3>
            <Input name='name' label="Name" labelPlacement='outside' placeholder='name' isInvalid = {!!state.errors.name} errorMessage = {state.errors.name?.join(', ')} />
            <Textarea name='description' label="Description" labelPlacement='outside' placeholder='describe your topic' isInvalid = {!!state.errors.description} errorMessage = {state.errors.description?.join(', ')}/>
             {state.errors._form ? <Chip variant='bordered' radius='sm' className='max-w-full' >{state.errors._form.join(', ')}</Chip> : null }
            <Button type="submit">Submit</Button>
          </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
