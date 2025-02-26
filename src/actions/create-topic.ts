'use server'

import { z } from "zod";

const createTopicSchema = z.object({
   name: z.string().min(3).regex(/^[a-zA-Z0-9_]+$/, {
      message: 'Name must be at least 3 characters long and contain only letters, numbers, and underscores',
   }),
   description: z.string().min(10).max(900),
})

export async function createTopic(formData: FormData){
   const name = formData.get('name')
   const description = formData.get('description')
   const result = createTopicSchema.safeParse({name, description})
   if(!result.success){
      console.log(result.error.flatten().fieldErrors);
      
   }
   console.log(name, description);
   
}