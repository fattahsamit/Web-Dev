// ENUMS

enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response2: APIResponse<object> = {
  status: 200,
  type: RType.UNAUTHENTICATED,
  data: {
    name: "Test",
    something: 300,
  },
};

console.log(response2);
