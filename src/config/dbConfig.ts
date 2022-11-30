
export const DbConfig: any = {
  useFactory: () => ({
    type: "mongodb",
    host: "localhost",
    
    database: "crud",
    synchronize: true,
  }),
  
};
