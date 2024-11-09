import { PLANTREE_SUBGRAPH_URL } from '@/lib/constants'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'

type TipInfo = {
  id: string
  totalAmount: string
  uri: string
}

export function useTipInfo(postId: string) {
  const query = gql`
    query geTip($postId: String!) {
      tip(id: $postId) {
        id
        totalAmount
        uri
      }
    }
  `

  const { data, ...rest } = useQuery<{ tip: TipInfo }>({
    queryKey: ['creation', postId],
    async queryFn() {
      return request({
        url: PLANTREE_SUBGRAPH_URL,
        document: query,
        variables: {
          postId: postId,
        },
      })
    },
    enabled: !!postId,
  })

  return {
    data: data?.tip,
    ...rest,
  }
}