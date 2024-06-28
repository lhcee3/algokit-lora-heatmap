import { InnerTransaction, SignatureType, Transaction } from '@/features/transactions/models'
import { Badge } from '@/features/common/components/badge'

export function TransactionTypeDescriptionDetails({ transaction }: { transaction: Transaction | InnerTransaction }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant={transaction.type}>{transaction.type}</Badge>
      {transaction.subType && <Badge variant="outline">{transaction.subType}</Badge>}
      {transaction.signature?.type === SignatureType.Multi && <Badge variant="outline">Multisig</Badge>}
      {transaction.signature?.type === SignatureType.Logic && <Badge variant="outline">LogicSig</Badge>}
      {transaction.rekeyTo && <Badge variant="outline">Rekey</Badge>}
    </div>
  )
}
