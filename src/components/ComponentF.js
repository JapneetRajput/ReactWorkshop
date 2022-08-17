import React from 'react'
import { UserContext,ChannelContext } from '../App'

const ComponentF = () => {
  return (
    // <div>Component F</div>
    <UserContext.Consumer>
        {
            user => {
                return (
                    <ChannelContext.Consumer>
                        {
                            channel=>{
                                return <div>User context value {user} Channel context value {channel}</div>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
    </UserContext.Consumer>
  )
}

export default ComponentF