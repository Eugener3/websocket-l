import { ConnectedSocket, OnGatewayConnection, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway(
    {
        cors: {
            origin: "*"
        }
    }
)
export class SocketService implements OnGatewayConnection {
    
    @SubscribeMessage('server-path')
    handleEvent(dto: any, @ConnectedSocket() client: any) {
        const res = {type: 'someType', dto};
        console.log(dto)
        client.emit("client-path", res)
    }

    handleConnection(client: any) {
        console.log(client);
        console.log("CONNECTED");
    }
}