import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({id, name, topic, subject, duration, color}: CompanionCardProps) => {
  return (
    <article className='companion-card' style={{backgroundColor: color}}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>
        <Button className='companion-bookmark'>
            <Image src="/icons/bookmark.svg" alt="bookmark" 
            width={12.5} height={15} 
            />
        </Button>
      </div>

      <h2 className='text-2l font-bold'>{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
        <p className='texsm'>{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className='w-full'>
        <Button className='btn-primary w-full justify-center'>Launch Lesson</Button>
      </Link>
    </article>
  )
}

export default CompanionCard
