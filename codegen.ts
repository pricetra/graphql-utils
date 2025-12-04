import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:8080/graphql',
  documents: ['src/documents/**/*.ts'],
  generates: {
    'src/types/': {
      preset: 'client',
      // plugins: ['typescript', 'typescript-operations'],
      config: {
        // avoidOptionals: true,
        scalars: {
          ID: 'number',
        },
      },
    },
    "src/types/index.ts": {
      plugins: [
        {
          add: {
            content: `
export * from "./fragment-masking";
export * from "./gql";
export * from './graphql';
`
          }
        },
      ],
    },
  },
};
export default config;
