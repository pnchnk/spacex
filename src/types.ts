export interface Rockets {
    __typename: string,
    id: string,
    name: string,
    description: string,
}

export interface Flights extends Rockets {
    picture: string,
}