import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe('RouteInMemoryRepository Test', () => {
   it('should insert a new route',async () =>{
        const repository = new RouteInMemoryRepository()
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {
                lat: 1,
                lng: 2
            },
            endPosition: {
                lat: 1,
                lng: 2
            },
        }
        const route = new Route(routeProps)
        await repository.insert(route)

        expect(repository.items).toHaveLength(1)
        expect(repository.items).toStrictEqual([route])
   })
});
