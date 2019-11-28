import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

const chatManager = new ChatManager({
    instanceLocator: 'v1:us1:718af224-bda4-4f8b-a10a-3a0cbf086992',
    userId: 'jingxin',
    tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/718af224-bda4-4f8b-a10a-3a0cbf086992/token' })
})
chatManager.connect({
    onAddedToRoom: room => {
        console.log(`Added to room ${room.name}`)
    }
})
    .then(currentUser => {
        console.log('Successful connection', currentUser)
    })
    .catch(err => {
        console.log('Error on connection', err)
    })