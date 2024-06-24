import { cn } from '@/features/common/utils'
import { BlockLink } from './block-link'
import { Card, CardContent } from '@/features/common/components/card'
import { useLatestBlockSummaries } from '../data'
import { Box } from 'lucide-react'
import { DateFormatted } from '@/features/common/components/date-formatted'
import { Info } from 'lucide-react'

export const latestBlocksTitle = 'Latest Blocks'

export function LatestBlocks() {
  const latestBlocks = useLatestBlockSummaries()

  return (
    <Card className={cn('px-4 pb-4 pt-2')}>
      <CardContent className={cn('text-sm space-y-1')}>
        <h2>{latestBlocksTitle}</h2>
        {latestBlocks.length > 0 && (
          <ul>
            {latestBlocks.map((block) => (
              <li key={block.round} className="border-b last:border-0">
                <BlockLink round={block.round} className="flex w-full gap-2 p-3.5 text-sm animate-in fade-in-20 hover:bg-accent">
                  <Box className="hidden text-primary sm:max-lg:block xl:block" />
                  <div>
                    <h3 className={cn('leading-none mb-2')}>{block.round}</h3>
                    <DateFormatted className="truncate" date={new Date(block.timestamp)} />
                  </div>
                  <span className={cn('ml-auto tracking-tight truncate')}>
                    {block.transactionsSummary.count} transaction{block.transactionsSummary.count === 1 ? '' : 's'}
                  </span>
                </BlockLink>
              </li>
            ))}
          </ul>
        )}
        {latestBlocks.length === 0 && (
          <div className="mx-2 flex items-center gap-2 py-3 align-middle">
            <Info />
            <span>No recent data available.</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
