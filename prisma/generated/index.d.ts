
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model PhysicalBookCopy
 * 
 */
export type PhysicalBookCopy = $Result.DefaultSelection<Prisma.$PhysicalBookCopyPayload>
/**
 * Model AudioBookCopy
 * 
 */
export type AudioBookCopy = $Result.DefaultSelection<Prisma.$AudioBookCopyPayload>
/**
 * Model BookReview
 * 
 */
export type BookReview = $Result.DefaultSelection<Prisma.$BookReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Genre: {
  FICTION: 'FICTION',
  NONFICTION: 'NONFICTION',
  SCIFI: 'SCIFI',
  FANTASY: 'FANTASY',
  MYSTERY: 'MYSTERY',
  BIOGRAPHY: 'BIOGRAPHY'
};

export type Genre = (typeof Genre)[keyof typeof Genre]

}

export type Genre = $Enums.Genre

export const Genre: typeof $Enums.Genre

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.physicalBookCopy`: Exposes CRUD operations for the **PhysicalBookCopy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhysicalBookCopies
    * const physicalBookCopies = await prisma.physicalBookCopy.findMany()
    * ```
    */
  get physicalBookCopy(): Prisma.PhysicalBookCopyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioBookCopy`: Exposes CRUD operations for the **AudioBookCopy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioBookCopies
    * const audioBookCopies = await prisma.audioBookCopy.findMany()
    * ```
    */
  get audioBookCopy(): Prisma.AudioBookCopyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookReview`: Exposes CRUD operations for the **BookReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookReviews
    * const bookReviews = await prisma.bookReview.findMany()
    * ```
    */
  get bookReview(): Prisma.BookReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Author: 'Author',
    Book: 'Book',
    PhysicalBookCopy: 'PhysicalBookCopy',
    AudioBookCopy: 'AudioBookCopy',
    BookReview: 'BookReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "author" | "book" | "physicalBookCopy" | "audioBookCopy" | "bookReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      PhysicalBookCopy: {
        payload: Prisma.$PhysicalBookCopyPayload<ExtArgs>
        fields: Prisma.PhysicalBookCopyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhysicalBookCopyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhysicalBookCopyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>
          }
          findFirst: {
            args: Prisma.PhysicalBookCopyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhysicalBookCopyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>
          }
          findMany: {
            args: Prisma.PhysicalBookCopyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>[]
          }
          create: {
            args: Prisma.PhysicalBookCopyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>
          }
          createMany: {
            args: Prisma.PhysicalBookCopyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhysicalBookCopyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>[]
          }
          delete: {
            args: Prisma.PhysicalBookCopyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>
          }
          update: {
            args: Prisma.PhysicalBookCopyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>
          }
          deleteMany: {
            args: Prisma.PhysicalBookCopyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhysicalBookCopyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhysicalBookCopyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>[]
          }
          upsert: {
            args: Prisma.PhysicalBookCopyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalBookCopyPayload>
          }
          aggregate: {
            args: Prisma.PhysicalBookCopyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhysicalBookCopy>
          }
          groupBy: {
            args: Prisma.PhysicalBookCopyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhysicalBookCopyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhysicalBookCopyCountArgs<ExtArgs>
            result: $Utils.Optional<PhysicalBookCopyCountAggregateOutputType> | number
          }
        }
      }
      AudioBookCopy: {
        payload: Prisma.$AudioBookCopyPayload<ExtArgs>
        fields: Prisma.AudioBookCopyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioBookCopyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioBookCopyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>
          }
          findFirst: {
            args: Prisma.AudioBookCopyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioBookCopyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>
          }
          findMany: {
            args: Prisma.AudioBookCopyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>[]
          }
          create: {
            args: Prisma.AudioBookCopyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>
          }
          createMany: {
            args: Prisma.AudioBookCopyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioBookCopyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>[]
          }
          delete: {
            args: Prisma.AudioBookCopyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>
          }
          update: {
            args: Prisma.AudioBookCopyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>
          }
          deleteMany: {
            args: Prisma.AudioBookCopyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioBookCopyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudioBookCopyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>[]
          }
          upsert: {
            args: Prisma.AudioBookCopyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioBookCopyPayload>
          }
          aggregate: {
            args: Prisma.AudioBookCopyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioBookCopy>
          }
          groupBy: {
            args: Prisma.AudioBookCopyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioBookCopyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioBookCopyCountArgs<ExtArgs>
            result: $Utils.Optional<AudioBookCopyCountAggregateOutputType> | number
          }
        }
      }
      BookReview: {
        payload: Prisma.$BookReviewPayload<ExtArgs>
        fields: Prisma.BookReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          findFirst: {
            args: Prisma.BookReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          findMany: {
            args: Prisma.BookReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>[]
          }
          create: {
            args: Prisma.BookReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          createMany: {
            args: Prisma.BookReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>[]
          }
          delete: {
            args: Prisma.BookReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          update: {
            args: Prisma.BookReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          deleteMany: {
            args: Prisma.BookReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>[]
          }
          upsert: {
            args: Prisma.BookReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookReviewPayload>
          }
          aggregate: {
            args: Prisma.BookReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookReview>
          }
          groupBy: {
            args: Prisma.BookReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookReviewCountArgs<ExtArgs>
            result: $Utils.Optional<BookReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    author?: AuthorOmit
    book?: BookOmit
    physicalBookCopy?: PhysicalBookCopyOmit
    audioBookCopy?: AudioBookCopyOmit
    bookReview?: BookReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    physicalBooks: number
    audioBooks: number
    bookReviews: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    physicalBooks?: boolean | BookCountOutputTypeCountPhysicalBooksArgs
    audioBooks?: boolean | BookCountOutputTypeCountAudioBooksArgs
    bookReviews?: boolean | BookCountOutputTypeCountBookReviewsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountPhysicalBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalBookCopyWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAudioBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioBookCopyWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Author$booksArgs<ExtArgs> = {}>(args?: Subset<T, Author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly firstName: FieldRef<"Author", 'String'>
    readonly lastName: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.books
   */
  export type Author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    pageLength: number | null
    duration: number | null
    authorId: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    pageLength: number | null
    duration: number | null
    authorId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    ISBN: string | null
    title: string | null
    pageLength: number | null
    duration: number | null
    genre: $Enums.Genre | null
    authorId: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    ISBN: string | null
    title: string | null
    pageLength: number | null
    duration: number | null
    genre: $Enums.Genre | null
    authorId: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    ISBN: number
    title: number
    pageLength: number
    duration: number
    genre: number
    authorId: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    pageLength?: true
    duration?: true
    authorId?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    pageLength?: true
    duration?: true
    authorId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    ISBN?: true
    title?: true
    pageLength?: true
    duration?: true
    genre?: true
    authorId?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    ISBN?: true
    title?: true
    pageLength?: true
    duration?: true
    genre?: true
    authorId?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    ISBN?: true
    title?: true
    pageLength?: true
    duration?: true
    genre?: true
    authorId?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    ISBN: string
    title: string
    pageLength: number | null
    duration: number | null
    genre: $Enums.Genre
    authorId: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ISBN?: boolean
    title?: boolean
    pageLength?: boolean
    duration?: boolean
    genre?: boolean
    authorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    physicalBooks?: boolean | Book$physicalBooksArgs<ExtArgs>
    audioBooks?: boolean | Book$audioBooksArgs<ExtArgs>
    bookReviews?: boolean | Book$bookReviewsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ISBN?: boolean
    title?: boolean
    pageLength?: boolean
    duration?: boolean
    genre?: boolean
    authorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ISBN?: boolean
    title?: boolean
    pageLength?: boolean
    duration?: boolean
    genre?: boolean
    authorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    ISBN?: boolean
    title?: boolean
    pageLength?: boolean
    duration?: boolean
    genre?: boolean
    authorId?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ISBN" | "title" | "pageLength" | "duration" | "genre" | "authorId", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    physicalBooks?: boolean | Book$physicalBooksArgs<ExtArgs>
    audioBooks?: boolean | Book$audioBooksArgs<ExtArgs>
    bookReviews?: boolean | Book$bookReviewsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
      physicalBooks: Prisma.$PhysicalBookCopyPayload<ExtArgs>[]
      audioBooks: Prisma.$AudioBookCopyPayload<ExtArgs>[]
      bookReviews: Prisma.$BookReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ISBN: string
      title: string
      pageLength: number | null
      duration: number | null
      genre: $Enums.Genre
      authorId: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    physicalBooks<T extends Book$physicalBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$physicalBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audioBooks<T extends Book$audioBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$audioBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookReviews<T extends Book$bookReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Book$bookReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly ISBN: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly pageLength: FieldRef<"Book", 'Int'>
    readonly duration: FieldRef<"Book", 'Int'>
    readonly genre: FieldRef<"Book", 'Genre'>
    readonly authorId: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.physicalBooks
   */
  export type Book$physicalBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    where?: PhysicalBookCopyWhereInput
    orderBy?: PhysicalBookCopyOrderByWithRelationInput | PhysicalBookCopyOrderByWithRelationInput[]
    cursor?: PhysicalBookCopyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhysicalBookCopyScalarFieldEnum | PhysicalBookCopyScalarFieldEnum[]
  }

  /**
   * Book.audioBooks
   */
  export type Book$audioBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    where?: AudioBookCopyWhereInput
    orderBy?: AudioBookCopyOrderByWithRelationInput | AudioBookCopyOrderByWithRelationInput[]
    cursor?: AudioBookCopyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudioBookCopyScalarFieldEnum | AudioBookCopyScalarFieldEnum[]
  }

  /**
   * Book.bookReviews
   */
  export type Book$bookReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    where?: BookReviewWhereInput
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    cursor?: BookReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model PhysicalBookCopy
   */

  export type AggregatePhysicalBookCopy = {
    _count: PhysicalBookCopyCountAggregateOutputType | null
    _avg: PhysicalBookCopyAvgAggregateOutputType | null
    _sum: PhysicalBookCopySumAggregateOutputType | null
    _min: PhysicalBookCopyMinAggregateOutputType | null
    _max: PhysicalBookCopyMaxAggregateOutputType | null
  }

  export type PhysicalBookCopyAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type PhysicalBookCopySumAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type PhysicalBookCopyMinAggregateOutputType = {
    id: number | null
    checkedOut: boolean | null
    bookId: number | null
  }

  export type PhysicalBookCopyMaxAggregateOutputType = {
    id: number | null
    checkedOut: boolean | null
    bookId: number | null
  }

  export type PhysicalBookCopyCountAggregateOutputType = {
    id: number
    checkedOut: number
    bookId: number
    _all: number
  }


  export type PhysicalBookCopyAvgAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type PhysicalBookCopySumAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type PhysicalBookCopyMinAggregateInputType = {
    id?: true
    checkedOut?: true
    bookId?: true
  }

  export type PhysicalBookCopyMaxAggregateInputType = {
    id?: true
    checkedOut?: true
    bookId?: true
  }

  export type PhysicalBookCopyCountAggregateInputType = {
    id?: true
    checkedOut?: true
    bookId?: true
    _all?: true
  }

  export type PhysicalBookCopyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalBookCopy to aggregate.
     */
    where?: PhysicalBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBookCopies to fetch.
     */
    orderBy?: PhysicalBookCopyOrderByWithRelationInput | PhysicalBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhysicalBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhysicalBookCopies
    **/
    _count?: true | PhysicalBookCopyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhysicalBookCopyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhysicalBookCopySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhysicalBookCopyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhysicalBookCopyMaxAggregateInputType
  }

  export type GetPhysicalBookCopyAggregateType<T extends PhysicalBookCopyAggregateArgs> = {
        [P in keyof T & keyof AggregatePhysicalBookCopy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhysicalBookCopy[P]>
      : GetScalarType<T[P], AggregatePhysicalBookCopy[P]>
  }




  export type PhysicalBookCopyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalBookCopyWhereInput
    orderBy?: PhysicalBookCopyOrderByWithAggregationInput | PhysicalBookCopyOrderByWithAggregationInput[]
    by: PhysicalBookCopyScalarFieldEnum[] | PhysicalBookCopyScalarFieldEnum
    having?: PhysicalBookCopyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhysicalBookCopyCountAggregateInputType | true
    _avg?: PhysicalBookCopyAvgAggregateInputType
    _sum?: PhysicalBookCopySumAggregateInputType
    _min?: PhysicalBookCopyMinAggregateInputType
    _max?: PhysicalBookCopyMaxAggregateInputType
  }

  export type PhysicalBookCopyGroupByOutputType = {
    id: number
    checkedOut: boolean
    bookId: number
    _count: PhysicalBookCopyCountAggregateOutputType | null
    _avg: PhysicalBookCopyAvgAggregateOutputType | null
    _sum: PhysicalBookCopySumAggregateOutputType | null
    _min: PhysicalBookCopyMinAggregateOutputType | null
    _max: PhysicalBookCopyMaxAggregateOutputType | null
  }

  type GetPhysicalBookCopyGroupByPayload<T extends PhysicalBookCopyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhysicalBookCopyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhysicalBookCopyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhysicalBookCopyGroupByOutputType[P]>
            : GetScalarType<T[P], PhysicalBookCopyGroupByOutputType[P]>
        }
      >
    >


  export type PhysicalBookCopySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalBookCopy"]>

  export type PhysicalBookCopySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalBookCopy"]>

  export type PhysicalBookCopySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalBookCopy"]>

  export type PhysicalBookCopySelectScalar = {
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
  }

  export type PhysicalBookCopyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkedOut" | "bookId", ExtArgs["result"]["physicalBookCopy"]>
  export type PhysicalBookCopyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type PhysicalBookCopyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type PhysicalBookCopyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $PhysicalBookCopyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhysicalBookCopy"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkedOut: boolean
      bookId: number
    }, ExtArgs["result"]["physicalBookCopy"]>
    composites: {}
  }

  type PhysicalBookCopyGetPayload<S extends boolean | null | undefined | PhysicalBookCopyDefaultArgs> = $Result.GetResult<Prisma.$PhysicalBookCopyPayload, S>

  type PhysicalBookCopyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhysicalBookCopyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhysicalBookCopyCountAggregateInputType | true
    }

  export interface PhysicalBookCopyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhysicalBookCopy'], meta: { name: 'PhysicalBookCopy' } }
    /**
     * Find zero or one PhysicalBookCopy that matches the filter.
     * @param {PhysicalBookCopyFindUniqueArgs} args - Arguments to find a PhysicalBookCopy
     * @example
     * // Get one PhysicalBookCopy
     * const physicalBookCopy = await prisma.physicalBookCopy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhysicalBookCopyFindUniqueArgs>(args: SelectSubset<T, PhysicalBookCopyFindUniqueArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhysicalBookCopy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhysicalBookCopyFindUniqueOrThrowArgs} args - Arguments to find a PhysicalBookCopy
     * @example
     * // Get one PhysicalBookCopy
     * const physicalBookCopy = await prisma.physicalBookCopy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhysicalBookCopyFindUniqueOrThrowArgs>(args: SelectSubset<T, PhysicalBookCopyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalBookCopy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCopyFindFirstArgs} args - Arguments to find a PhysicalBookCopy
     * @example
     * // Get one PhysicalBookCopy
     * const physicalBookCopy = await prisma.physicalBookCopy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhysicalBookCopyFindFirstArgs>(args?: SelectSubset<T, PhysicalBookCopyFindFirstArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalBookCopy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCopyFindFirstOrThrowArgs} args - Arguments to find a PhysicalBookCopy
     * @example
     * // Get one PhysicalBookCopy
     * const physicalBookCopy = await prisma.physicalBookCopy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhysicalBookCopyFindFirstOrThrowArgs>(args?: SelectSubset<T, PhysicalBookCopyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhysicalBookCopies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCopyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhysicalBookCopies
     * const physicalBookCopies = await prisma.physicalBookCopy.findMany()
     * 
     * // Get first 10 PhysicalBookCopies
     * const physicalBookCopies = await prisma.physicalBookCopy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const physicalBookCopyWithIdOnly = await prisma.physicalBookCopy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhysicalBookCopyFindManyArgs>(args?: SelectSubset<T, PhysicalBookCopyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhysicalBookCopy.
     * @param {PhysicalBookCopyCreateArgs} args - Arguments to create a PhysicalBookCopy.
     * @example
     * // Create one PhysicalBookCopy
     * const PhysicalBookCopy = await prisma.physicalBookCopy.create({
     *   data: {
     *     // ... data to create a PhysicalBookCopy
     *   }
     * })
     * 
     */
    create<T extends PhysicalBookCopyCreateArgs>(args: SelectSubset<T, PhysicalBookCopyCreateArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhysicalBookCopies.
     * @param {PhysicalBookCopyCreateManyArgs} args - Arguments to create many PhysicalBookCopies.
     * @example
     * // Create many PhysicalBookCopies
     * const physicalBookCopy = await prisma.physicalBookCopy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhysicalBookCopyCreateManyArgs>(args?: SelectSubset<T, PhysicalBookCopyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhysicalBookCopies and returns the data saved in the database.
     * @param {PhysicalBookCopyCreateManyAndReturnArgs} args - Arguments to create many PhysicalBookCopies.
     * @example
     * // Create many PhysicalBookCopies
     * const physicalBookCopy = await prisma.physicalBookCopy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhysicalBookCopies and only return the `id`
     * const physicalBookCopyWithIdOnly = await prisma.physicalBookCopy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhysicalBookCopyCreateManyAndReturnArgs>(args?: SelectSubset<T, PhysicalBookCopyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhysicalBookCopy.
     * @param {PhysicalBookCopyDeleteArgs} args - Arguments to delete one PhysicalBookCopy.
     * @example
     * // Delete one PhysicalBookCopy
     * const PhysicalBookCopy = await prisma.physicalBookCopy.delete({
     *   where: {
     *     // ... filter to delete one PhysicalBookCopy
     *   }
     * })
     * 
     */
    delete<T extends PhysicalBookCopyDeleteArgs>(args: SelectSubset<T, PhysicalBookCopyDeleteArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhysicalBookCopy.
     * @param {PhysicalBookCopyUpdateArgs} args - Arguments to update one PhysicalBookCopy.
     * @example
     * // Update one PhysicalBookCopy
     * const physicalBookCopy = await prisma.physicalBookCopy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhysicalBookCopyUpdateArgs>(args: SelectSubset<T, PhysicalBookCopyUpdateArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhysicalBookCopies.
     * @param {PhysicalBookCopyDeleteManyArgs} args - Arguments to filter PhysicalBookCopies to delete.
     * @example
     * // Delete a few PhysicalBookCopies
     * const { count } = await prisma.physicalBookCopy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhysicalBookCopyDeleteManyArgs>(args?: SelectSubset<T, PhysicalBookCopyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalBookCopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCopyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhysicalBookCopies
     * const physicalBookCopy = await prisma.physicalBookCopy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhysicalBookCopyUpdateManyArgs>(args: SelectSubset<T, PhysicalBookCopyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalBookCopies and returns the data updated in the database.
     * @param {PhysicalBookCopyUpdateManyAndReturnArgs} args - Arguments to update many PhysicalBookCopies.
     * @example
     * // Update many PhysicalBookCopies
     * const physicalBookCopy = await prisma.physicalBookCopy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhysicalBookCopies and only return the `id`
     * const physicalBookCopyWithIdOnly = await prisma.physicalBookCopy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhysicalBookCopyUpdateManyAndReturnArgs>(args: SelectSubset<T, PhysicalBookCopyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhysicalBookCopy.
     * @param {PhysicalBookCopyUpsertArgs} args - Arguments to update or create a PhysicalBookCopy.
     * @example
     * // Update or create a PhysicalBookCopy
     * const physicalBookCopy = await prisma.physicalBookCopy.upsert({
     *   create: {
     *     // ... data to create a PhysicalBookCopy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhysicalBookCopy we want to update
     *   }
     * })
     */
    upsert<T extends PhysicalBookCopyUpsertArgs>(args: SelectSubset<T, PhysicalBookCopyUpsertArgs<ExtArgs>>): Prisma__PhysicalBookCopyClient<$Result.GetResult<Prisma.$PhysicalBookCopyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhysicalBookCopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCopyCountArgs} args - Arguments to filter PhysicalBookCopies to count.
     * @example
     * // Count the number of PhysicalBookCopies
     * const count = await prisma.physicalBookCopy.count({
     *   where: {
     *     // ... the filter for the PhysicalBookCopies we want to count
     *   }
     * })
    **/
    count<T extends PhysicalBookCopyCountArgs>(
      args?: Subset<T, PhysicalBookCopyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhysicalBookCopyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhysicalBookCopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCopyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhysicalBookCopyAggregateArgs>(args: Subset<T, PhysicalBookCopyAggregateArgs>): Prisma.PrismaPromise<GetPhysicalBookCopyAggregateType<T>>

    /**
     * Group by PhysicalBookCopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalBookCopyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhysicalBookCopyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhysicalBookCopyGroupByArgs['orderBy'] }
        : { orderBy?: PhysicalBookCopyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhysicalBookCopyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhysicalBookCopyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhysicalBookCopy model
   */
  readonly fields: PhysicalBookCopyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhysicalBookCopy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhysicalBookCopyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhysicalBookCopy model
   */
  interface PhysicalBookCopyFieldRefs {
    readonly id: FieldRef<"PhysicalBookCopy", 'Int'>
    readonly checkedOut: FieldRef<"PhysicalBookCopy", 'Boolean'>
    readonly bookId: FieldRef<"PhysicalBookCopy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PhysicalBookCopy findUnique
   */
  export type PhysicalBookCopyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBookCopy to fetch.
     */
    where: PhysicalBookCopyWhereUniqueInput
  }

  /**
   * PhysicalBookCopy findUniqueOrThrow
   */
  export type PhysicalBookCopyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBookCopy to fetch.
     */
    where: PhysicalBookCopyWhereUniqueInput
  }

  /**
   * PhysicalBookCopy findFirst
   */
  export type PhysicalBookCopyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBookCopy to fetch.
     */
    where?: PhysicalBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBookCopies to fetch.
     */
    orderBy?: PhysicalBookCopyOrderByWithRelationInput | PhysicalBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalBookCopies.
     */
    cursor?: PhysicalBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalBookCopies.
     */
    distinct?: PhysicalBookCopyScalarFieldEnum | PhysicalBookCopyScalarFieldEnum[]
  }

  /**
   * PhysicalBookCopy findFirstOrThrow
   */
  export type PhysicalBookCopyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBookCopy to fetch.
     */
    where?: PhysicalBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBookCopies to fetch.
     */
    orderBy?: PhysicalBookCopyOrderByWithRelationInput | PhysicalBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalBookCopies.
     */
    cursor?: PhysicalBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalBookCopies.
     */
    distinct?: PhysicalBookCopyScalarFieldEnum | PhysicalBookCopyScalarFieldEnum[]
  }

  /**
   * PhysicalBookCopy findMany
   */
  export type PhysicalBookCopyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalBookCopies to fetch.
     */
    where?: PhysicalBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalBookCopies to fetch.
     */
    orderBy?: PhysicalBookCopyOrderByWithRelationInput | PhysicalBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhysicalBookCopies.
     */
    cursor?: PhysicalBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalBookCopies.
     */
    skip?: number
    distinct?: PhysicalBookCopyScalarFieldEnum | PhysicalBookCopyScalarFieldEnum[]
  }

  /**
   * PhysicalBookCopy create
   */
  export type PhysicalBookCopyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * The data needed to create a PhysicalBookCopy.
     */
    data: XOR<PhysicalBookCopyCreateInput, PhysicalBookCopyUncheckedCreateInput>
  }

  /**
   * PhysicalBookCopy createMany
   */
  export type PhysicalBookCopyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhysicalBookCopies.
     */
    data: PhysicalBookCopyCreateManyInput | PhysicalBookCopyCreateManyInput[]
  }

  /**
   * PhysicalBookCopy createManyAndReturn
   */
  export type PhysicalBookCopyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * The data used to create many PhysicalBookCopies.
     */
    data: PhysicalBookCopyCreateManyInput | PhysicalBookCopyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhysicalBookCopy update
   */
  export type PhysicalBookCopyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * The data needed to update a PhysicalBookCopy.
     */
    data: XOR<PhysicalBookCopyUpdateInput, PhysicalBookCopyUncheckedUpdateInput>
    /**
     * Choose, which PhysicalBookCopy to update.
     */
    where: PhysicalBookCopyWhereUniqueInput
  }

  /**
   * PhysicalBookCopy updateMany
   */
  export type PhysicalBookCopyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhysicalBookCopies.
     */
    data: XOR<PhysicalBookCopyUpdateManyMutationInput, PhysicalBookCopyUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalBookCopies to update
     */
    where?: PhysicalBookCopyWhereInput
    /**
     * Limit how many PhysicalBookCopies to update.
     */
    limit?: number
  }

  /**
   * PhysicalBookCopy updateManyAndReturn
   */
  export type PhysicalBookCopyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * The data used to update PhysicalBookCopies.
     */
    data: XOR<PhysicalBookCopyUpdateManyMutationInput, PhysicalBookCopyUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalBookCopies to update
     */
    where?: PhysicalBookCopyWhereInput
    /**
     * Limit how many PhysicalBookCopies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhysicalBookCopy upsert
   */
  export type PhysicalBookCopyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * The filter to search for the PhysicalBookCopy to update in case it exists.
     */
    where: PhysicalBookCopyWhereUniqueInput
    /**
     * In case the PhysicalBookCopy found by the `where` argument doesn't exist, create a new PhysicalBookCopy with this data.
     */
    create: XOR<PhysicalBookCopyCreateInput, PhysicalBookCopyUncheckedCreateInput>
    /**
     * In case the PhysicalBookCopy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhysicalBookCopyUpdateInput, PhysicalBookCopyUncheckedUpdateInput>
  }

  /**
   * PhysicalBookCopy delete
   */
  export type PhysicalBookCopyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
    /**
     * Filter which PhysicalBookCopy to delete.
     */
    where: PhysicalBookCopyWhereUniqueInput
  }

  /**
   * PhysicalBookCopy deleteMany
   */
  export type PhysicalBookCopyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalBookCopies to delete
     */
    where?: PhysicalBookCopyWhereInput
    /**
     * Limit how many PhysicalBookCopies to delete.
     */
    limit?: number
  }

  /**
   * PhysicalBookCopy without action
   */
  export type PhysicalBookCopyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalBookCopy
     */
    select?: PhysicalBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalBookCopy
     */
    omit?: PhysicalBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalBookCopyInclude<ExtArgs> | null
  }


  /**
   * Model AudioBookCopy
   */

  export type AggregateAudioBookCopy = {
    _count: AudioBookCopyCountAggregateOutputType | null
    _avg: AudioBookCopyAvgAggregateOutputType | null
    _sum: AudioBookCopySumAggregateOutputType | null
    _min: AudioBookCopyMinAggregateOutputType | null
    _max: AudioBookCopyMaxAggregateOutputType | null
  }

  export type AudioBookCopyAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type AudioBookCopySumAggregateOutputType = {
    id: number | null
    bookId: number | null
  }

  export type AudioBookCopyMinAggregateOutputType = {
    id: number | null
    checkedOut: boolean | null
    bookId: number | null
  }

  export type AudioBookCopyMaxAggregateOutputType = {
    id: number | null
    checkedOut: boolean | null
    bookId: number | null
  }

  export type AudioBookCopyCountAggregateOutputType = {
    id: number
    checkedOut: number
    bookId: number
    _all: number
  }


  export type AudioBookCopyAvgAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type AudioBookCopySumAggregateInputType = {
    id?: true
    bookId?: true
  }

  export type AudioBookCopyMinAggregateInputType = {
    id?: true
    checkedOut?: true
    bookId?: true
  }

  export type AudioBookCopyMaxAggregateInputType = {
    id?: true
    checkedOut?: true
    bookId?: true
  }

  export type AudioBookCopyCountAggregateInputType = {
    id?: true
    checkedOut?: true
    bookId?: true
    _all?: true
  }

  export type AudioBookCopyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioBookCopy to aggregate.
     */
    where?: AudioBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioBookCopies to fetch.
     */
    orderBy?: AudioBookCopyOrderByWithRelationInput | AudioBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioBookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioBookCopies
    **/
    _count?: true | AudioBookCopyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioBookCopyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioBookCopySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioBookCopyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioBookCopyMaxAggregateInputType
  }

  export type GetAudioBookCopyAggregateType<T extends AudioBookCopyAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioBookCopy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioBookCopy[P]>
      : GetScalarType<T[P], AggregateAudioBookCopy[P]>
  }




  export type AudioBookCopyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioBookCopyWhereInput
    orderBy?: AudioBookCopyOrderByWithAggregationInput | AudioBookCopyOrderByWithAggregationInput[]
    by: AudioBookCopyScalarFieldEnum[] | AudioBookCopyScalarFieldEnum
    having?: AudioBookCopyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioBookCopyCountAggregateInputType | true
    _avg?: AudioBookCopyAvgAggregateInputType
    _sum?: AudioBookCopySumAggregateInputType
    _min?: AudioBookCopyMinAggregateInputType
    _max?: AudioBookCopyMaxAggregateInputType
  }

  export type AudioBookCopyGroupByOutputType = {
    id: number
    checkedOut: boolean
    bookId: number
    _count: AudioBookCopyCountAggregateOutputType | null
    _avg: AudioBookCopyAvgAggregateOutputType | null
    _sum: AudioBookCopySumAggregateOutputType | null
    _min: AudioBookCopyMinAggregateOutputType | null
    _max: AudioBookCopyMaxAggregateOutputType | null
  }

  type GetAudioBookCopyGroupByPayload<T extends AudioBookCopyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioBookCopyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioBookCopyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioBookCopyGroupByOutputType[P]>
            : GetScalarType<T[P], AudioBookCopyGroupByOutputType[P]>
        }
      >
    >


  export type AudioBookCopySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioBookCopy"]>

  export type AudioBookCopySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioBookCopy"]>

  export type AudioBookCopySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioBookCopy"]>

  export type AudioBookCopySelectScalar = {
    id?: boolean
    checkedOut?: boolean
    bookId?: boolean
  }

  export type AudioBookCopyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkedOut" | "bookId", ExtArgs["result"]["audioBookCopy"]>
  export type AudioBookCopyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type AudioBookCopyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type AudioBookCopyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $AudioBookCopyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioBookCopy"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkedOut: boolean
      bookId: number
    }, ExtArgs["result"]["audioBookCopy"]>
    composites: {}
  }

  type AudioBookCopyGetPayload<S extends boolean | null | undefined | AudioBookCopyDefaultArgs> = $Result.GetResult<Prisma.$AudioBookCopyPayload, S>

  type AudioBookCopyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioBookCopyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioBookCopyCountAggregateInputType | true
    }

  export interface AudioBookCopyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioBookCopy'], meta: { name: 'AudioBookCopy' } }
    /**
     * Find zero or one AudioBookCopy that matches the filter.
     * @param {AudioBookCopyFindUniqueArgs} args - Arguments to find a AudioBookCopy
     * @example
     * // Get one AudioBookCopy
     * const audioBookCopy = await prisma.audioBookCopy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioBookCopyFindUniqueArgs>(args: SelectSubset<T, AudioBookCopyFindUniqueArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioBookCopy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioBookCopyFindUniqueOrThrowArgs} args - Arguments to find a AudioBookCopy
     * @example
     * // Get one AudioBookCopy
     * const audioBookCopy = await prisma.audioBookCopy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioBookCopyFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioBookCopyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioBookCopy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioBookCopyFindFirstArgs} args - Arguments to find a AudioBookCopy
     * @example
     * // Get one AudioBookCopy
     * const audioBookCopy = await prisma.audioBookCopy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioBookCopyFindFirstArgs>(args?: SelectSubset<T, AudioBookCopyFindFirstArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioBookCopy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioBookCopyFindFirstOrThrowArgs} args - Arguments to find a AudioBookCopy
     * @example
     * // Get one AudioBookCopy
     * const audioBookCopy = await prisma.audioBookCopy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioBookCopyFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioBookCopyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioBookCopies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioBookCopyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioBookCopies
     * const audioBookCopies = await prisma.audioBookCopy.findMany()
     * 
     * // Get first 10 AudioBookCopies
     * const audioBookCopies = await prisma.audioBookCopy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioBookCopyWithIdOnly = await prisma.audioBookCopy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioBookCopyFindManyArgs>(args?: SelectSubset<T, AudioBookCopyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioBookCopy.
     * @param {AudioBookCopyCreateArgs} args - Arguments to create a AudioBookCopy.
     * @example
     * // Create one AudioBookCopy
     * const AudioBookCopy = await prisma.audioBookCopy.create({
     *   data: {
     *     // ... data to create a AudioBookCopy
     *   }
     * })
     * 
     */
    create<T extends AudioBookCopyCreateArgs>(args: SelectSubset<T, AudioBookCopyCreateArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioBookCopies.
     * @param {AudioBookCopyCreateManyArgs} args - Arguments to create many AudioBookCopies.
     * @example
     * // Create many AudioBookCopies
     * const audioBookCopy = await prisma.audioBookCopy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioBookCopyCreateManyArgs>(args?: SelectSubset<T, AudioBookCopyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioBookCopies and returns the data saved in the database.
     * @param {AudioBookCopyCreateManyAndReturnArgs} args - Arguments to create many AudioBookCopies.
     * @example
     * // Create many AudioBookCopies
     * const audioBookCopy = await prisma.audioBookCopy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioBookCopies and only return the `id`
     * const audioBookCopyWithIdOnly = await prisma.audioBookCopy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioBookCopyCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioBookCopyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AudioBookCopy.
     * @param {AudioBookCopyDeleteArgs} args - Arguments to delete one AudioBookCopy.
     * @example
     * // Delete one AudioBookCopy
     * const AudioBookCopy = await prisma.audioBookCopy.delete({
     *   where: {
     *     // ... filter to delete one AudioBookCopy
     *   }
     * })
     * 
     */
    delete<T extends AudioBookCopyDeleteArgs>(args: SelectSubset<T, AudioBookCopyDeleteArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioBookCopy.
     * @param {AudioBookCopyUpdateArgs} args - Arguments to update one AudioBookCopy.
     * @example
     * // Update one AudioBookCopy
     * const audioBookCopy = await prisma.audioBookCopy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioBookCopyUpdateArgs>(args: SelectSubset<T, AudioBookCopyUpdateArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioBookCopies.
     * @param {AudioBookCopyDeleteManyArgs} args - Arguments to filter AudioBookCopies to delete.
     * @example
     * // Delete a few AudioBookCopies
     * const { count } = await prisma.audioBookCopy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioBookCopyDeleteManyArgs>(args?: SelectSubset<T, AudioBookCopyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioBookCopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioBookCopyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioBookCopies
     * const audioBookCopy = await prisma.audioBookCopy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioBookCopyUpdateManyArgs>(args: SelectSubset<T, AudioBookCopyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioBookCopies and returns the data updated in the database.
     * @param {AudioBookCopyUpdateManyAndReturnArgs} args - Arguments to update many AudioBookCopies.
     * @example
     * // Update many AudioBookCopies
     * const audioBookCopy = await prisma.audioBookCopy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AudioBookCopies and only return the `id`
     * const audioBookCopyWithIdOnly = await prisma.audioBookCopy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AudioBookCopyUpdateManyAndReturnArgs>(args: SelectSubset<T, AudioBookCopyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AudioBookCopy.
     * @param {AudioBookCopyUpsertArgs} args - Arguments to update or create a AudioBookCopy.
     * @example
     * // Update or create a AudioBookCopy
     * const audioBookCopy = await prisma.audioBookCopy.upsert({
     *   create: {
     *     // ... data to create a AudioBookCopy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioBookCopy we want to update
     *   }
     * })
     */
    upsert<T extends AudioBookCopyUpsertArgs>(args: SelectSubset<T, AudioBookCopyUpsertArgs<ExtArgs>>): Prisma__AudioBookCopyClient<$Result.GetResult<Prisma.$AudioBookCopyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AudioBookCopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioBookCopyCountArgs} args - Arguments to filter AudioBookCopies to count.
     * @example
     * // Count the number of AudioBookCopies
     * const count = await prisma.audioBookCopy.count({
     *   where: {
     *     // ... the filter for the AudioBookCopies we want to count
     *   }
     * })
    **/
    count<T extends AudioBookCopyCountArgs>(
      args?: Subset<T, AudioBookCopyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioBookCopyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioBookCopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioBookCopyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudioBookCopyAggregateArgs>(args: Subset<T, AudioBookCopyAggregateArgs>): Prisma.PrismaPromise<GetAudioBookCopyAggregateType<T>>

    /**
     * Group by AudioBookCopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioBookCopyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudioBookCopyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioBookCopyGroupByArgs['orderBy'] }
        : { orderBy?: AudioBookCopyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudioBookCopyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioBookCopyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioBookCopy model
   */
  readonly fields: AudioBookCopyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioBookCopy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioBookCopyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AudioBookCopy model
   */
  interface AudioBookCopyFieldRefs {
    readonly id: FieldRef<"AudioBookCopy", 'Int'>
    readonly checkedOut: FieldRef<"AudioBookCopy", 'Boolean'>
    readonly bookId: FieldRef<"AudioBookCopy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AudioBookCopy findUnique
   */
  export type AudioBookCopyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which AudioBookCopy to fetch.
     */
    where: AudioBookCopyWhereUniqueInput
  }

  /**
   * AudioBookCopy findUniqueOrThrow
   */
  export type AudioBookCopyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which AudioBookCopy to fetch.
     */
    where: AudioBookCopyWhereUniqueInput
  }

  /**
   * AudioBookCopy findFirst
   */
  export type AudioBookCopyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which AudioBookCopy to fetch.
     */
    where?: AudioBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioBookCopies to fetch.
     */
    orderBy?: AudioBookCopyOrderByWithRelationInput | AudioBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioBookCopies.
     */
    cursor?: AudioBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioBookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioBookCopies.
     */
    distinct?: AudioBookCopyScalarFieldEnum | AudioBookCopyScalarFieldEnum[]
  }

  /**
   * AudioBookCopy findFirstOrThrow
   */
  export type AudioBookCopyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which AudioBookCopy to fetch.
     */
    where?: AudioBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioBookCopies to fetch.
     */
    orderBy?: AudioBookCopyOrderByWithRelationInput | AudioBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioBookCopies.
     */
    cursor?: AudioBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioBookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioBookCopies.
     */
    distinct?: AudioBookCopyScalarFieldEnum | AudioBookCopyScalarFieldEnum[]
  }

  /**
   * AudioBookCopy findMany
   */
  export type AudioBookCopyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * Filter, which AudioBookCopies to fetch.
     */
    where?: AudioBookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioBookCopies to fetch.
     */
    orderBy?: AudioBookCopyOrderByWithRelationInput | AudioBookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioBookCopies.
     */
    cursor?: AudioBookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioBookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioBookCopies.
     */
    skip?: number
    distinct?: AudioBookCopyScalarFieldEnum | AudioBookCopyScalarFieldEnum[]
  }

  /**
   * AudioBookCopy create
   */
  export type AudioBookCopyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * The data needed to create a AudioBookCopy.
     */
    data: XOR<AudioBookCopyCreateInput, AudioBookCopyUncheckedCreateInput>
  }

  /**
   * AudioBookCopy createMany
   */
  export type AudioBookCopyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioBookCopies.
     */
    data: AudioBookCopyCreateManyInput | AudioBookCopyCreateManyInput[]
  }

  /**
   * AudioBookCopy createManyAndReturn
   */
  export type AudioBookCopyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * The data used to create many AudioBookCopies.
     */
    data: AudioBookCopyCreateManyInput | AudioBookCopyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioBookCopy update
   */
  export type AudioBookCopyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * The data needed to update a AudioBookCopy.
     */
    data: XOR<AudioBookCopyUpdateInput, AudioBookCopyUncheckedUpdateInput>
    /**
     * Choose, which AudioBookCopy to update.
     */
    where: AudioBookCopyWhereUniqueInput
  }

  /**
   * AudioBookCopy updateMany
   */
  export type AudioBookCopyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioBookCopies.
     */
    data: XOR<AudioBookCopyUpdateManyMutationInput, AudioBookCopyUncheckedUpdateManyInput>
    /**
     * Filter which AudioBookCopies to update
     */
    where?: AudioBookCopyWhereInput
    /**
     * Limit how many AudioBookCopies to update.
     */
    limit?: number
  }

  /**
   * AudioBookCopy updateManyAndReturn
   */
  export type AudioBookCopyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * The data used to update AudioBookCopies.
     */
    data: XOR<AudioBookCopyUpdateManyMutationInput, AudioBookCopyUncheckedUpdateManyInput>
    /**
     * Filter which AudioBookCopies to update
     */
    where?: AudioBookCopyWhereInput
    /**
     * Limit how many AudioBookCopies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioBookCopy upsert
   */
  export type AudioBookCopyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * The filter to search for the AudioBookCopy to update in case it exists.
     */
    where: AudioBookCopyWhereUniqueInput
    /**
     * In case the AudioBookCopy found by the `where` argument doesn't exist, create a new AudioBookCopy with this data.
     */
    create: XOR<AudioBookCopyCreateInput, AudioBookCopyUncheckedCreateInput>
    /**
     * In case the AudioBookCopy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioBookCopyUpdateInput, AudioBookCopyUncheckedUpdateInput>
  }

  /**
   * AudioBookCopy delete
   */
  export type AudioBookCopyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
    /**
     * Filter which AudioBookCopy to delete.
     */
    where: AudioBookCopyWhereUniqueInput
  }

  /**
   * AudioBookCopy deleteMany
   */
  export type AudioBookCopyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioBookCopies to delete
     */
    where?: AudioBookCopyWhereInput
    /**
     * Limit how many AudioBookCopies to delete.
     */
    limit?: number
  }

  /**
   * AudioBookCopy without action
   */
  export type AudioBookCopyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioBookCopy
     */
    select?: AudioBookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioBookCopy
     */
    omit?: AudioBookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioBookCopyInclude<ExtArgs> | null
  }


  /**
   * Model BookReview
   */

  export type AggregateBookReview = {
    _count: BookReviewCountAggregateOutputType | null
    _avg: BookReviewAvgAggregateOutputType | null
    _sum: BookReviewSumAggregateOutputType | null
    _min: BookReviewMinAggregateOutputType | null
    _max: BookReviewMaxAggregateOutputType | null
  }

  export type BookReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    bookId: number | null
  }

  export type BookReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    bookId: number | null
  }

  export type BookReviewMinAggregateOutputType = {
    id: number | null
    reviewerName: string | null
    review: string | null
    rating: number | null
    bookId: number | null
  }

  export type BookReviewMaxAggregateOutputType = {
    id: number | null
    reviewerName: string | null
    review: string | null
    rating: number | null
    bookId: number | null
  }

  export type BookReviewCountAggregateOutputType = {
    id: number
    reviewerName: number
    review: number
    rating: number
    bookId: number
    _all: number
  }


  export type BookReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    bookId?: true
  }

  export type BookReviewSumAggregateInputType = {
    id?: true
    rating?: true
    bookId?: true
  }

  export type BookReviewMinAggregateInputType = {
    id?: true
    reviewerName?: true
    review?: true
    rating?: true
    bookId?: true
  }

  export type BookReviewMaxAggregateInputType = {
    id?: true
    reviewerName?: true
    review?: true
    rating?: true
    bookId?: true
  }

  export type BookReviewCountAggregateInputType = {
    id?: true
    reviewerName?: true
    review?: true
    rating?: true
    bookId?: true
    _all?: true
  }

  export type BookReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookReview to aggregate.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookReviews
    **/
    _count?: true | BookReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookReviewMaxAggregateInputType
  }

  export type GetBookReviewAggregateType<T extends BookReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateBookReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookReview[P]>
      : GetScalarType<T[P], AggregateBookReview[P]>
  }




  export type BookReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookReviewWhereInput
    orderBy?: BookReviewOrderByWithAggregationInput | BookReviewOrderByWithAggregationInput[]
    by: BookReviewScalarFieldEnum[] | BookReviewScalarFieldEnum
    having?: BookReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookReviewCountAggregateInputType | true
    _avg?: BookReviewAvgAggregateInputType
    _sum?: BookReviewSumAggregateInputType
    _min?: BookReviewMinAggregateInputType
    _max?: BookReviewMaxAggregateInputType
  }

  export type BookReviewGroupByOutputType = {
    id: number
    reviewerName: string
    review: string
    rating: number
    bookId: number
    _count: BookReviewCountAggregateOutputType | null
    _avg: BookReviewAvgAggregateOutputType | null
    _sum: BookReviewSumAggregateOutputType | null
    _min: BookReviewMinAggregateOutputType | null
    _max: BookReviewMaxAggregateOutputType | null
  }

  type GetBookReviewGroupByPayload<T extends BookReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookReviewGroupByOutputType[P]>
            : GetScalarType<T[P], BookReviewGroupByOutputType[P]>
        }
      >
    >


  export type BookReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerName?: boolean
    review?: boolean
    rating?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookReview"]>

  export type BookReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerName?: boolean
    review?: boolean
    rating?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookReview"]>

  export type BookReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerName?: boolean
    review?: boolean
    rating?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookReview"]>

  export type BookReviewSelectScalar = {
    id?: boolean
    reviewerName?: boolean
    review?: boolean
    rating?: boolean
    bookId?: boolean
  }

  export type BookReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewerName" | "review" | "rating" | "bookId", ExtArgs["result"]["bookReview"]>
  export type BookReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookReview"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewerName: string
      review: string
      rating: number
      bookId: number
    }, ExtArgs["result"]["bookReview"]>
    composites: {}
  }

  type BookReviewGetPayload<S extends boolean | null | undefined | BookReviewDefaultArgs> = $Result.GetResult<Prisma.$BookReviewPayload, S>

  type BookReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookReviewCountAggregateInputType | true
    }

  export interface BookReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookReview'], meta: { name: 'BookReview' } }
    /**
     * Find zero or one BookReview that matches the filter.
     * @param {BookReviewFindUniqueArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookReviewFindUniqueArgs>(args: SelectSubset<T, BookReviewFindUniqueArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookReviewFindUniqueOrThrowArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, BookReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewFindFirstArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookReviewFindFirstArgs>(args?: SelectSubset<T, BookReviewFindFirstArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewFindFirstOrThrowArgs} args - Arguments to find a BookReview
     * @example
     * // Get one BookReview
     * const bookReview = await prisma.bookReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, BookReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookReviews
     * const bookReviews = await prisma.bookReview.findMany()
     * 
     * // Get first 10 BookReviews
     * const bookReviews = await prisma.bookReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookReviewWithIdOnly = await prisma.bookReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookReviewFindManyArgs>(args?: SelectSubset<T, BookReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookReview.
     * @param {BookReviewCreateArgs} args - Arguments to create a BookReview.
     * @example
     * // Create one BookReview
     * const BookReview = await prisma.bookReview.create({
     *   data: {
     *     // ... data to create a BookReview
     *   }
     * })
     * 
     */
    create<T extends BookReviewCreateArgs>(args: SelectSubset<T, BookReviewCreateArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookReviews.
     * @param {BookReviewCreateManyArgs} args - Arguments to create many BookReviews.
     * @example
     * // Create many BookReviews
     * const bookReview = await prisma.bookReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookReviewCreateManyArgs>(args?: SelectSubset<T, BookReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookReviews and returns the data saved in the database.
     * @param {BookReviewCreateManyAndReturnArgs} args - Arguments to create many BookReviews.
     * @example
     * // Create many BookReviews
     * const bookReview = await prisma.bookReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookReviews and only return the `id`
     * const bookReviewWithIdOnly = await prisma.bookReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, BookReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookReview.
     * @param {BookReviewDeleteArgs} args - Arguments to delete one BookReview.
     * @example
     * // Delete one BookReview
     * const BookReview = await prisma.bookReview.delete({
     *   where: {
     *     // ... filter to delete one BookReview
     *   }
     * })
     * 
     */
    delete<T extends BookReviewDeleteArgs>(args: SelectSubset<T, BookReviewDeleteArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookReview.
     * @param {BookReviewUpdateArgs} args - Arguments to update one BookReview.
     * @example
     * // Update one BookReview
     * const bookReview = await prisma.bookReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookReviewUpdateArgs>(args: SelectSubset<T, BookReviewUpdateArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookReviews.
     * @param {BookReviewDeleteManyArgs} args - Arguments to filter BookReviews to delete.
     * @example
     * // Delete a few BookReviews
     * const { count } = await prisma.bookReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookReviewDeleteManyArgs>(args?: SelectSubset<T, BookReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookReviews
     * const bookReview = await prisma.bookReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookReviewUpdateManyArgs>(args: SelectSubset<T, BookReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookReviews and returns the data updated in the database.
     * @param {BookReviewUpdateManyAndReturnArgs} args - Arguments to update many BookReviews.
     * @example
     * // Update many BookReviews
     * const bookReview = await prisma.bookReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookReviews and only return the `id`
     * const bookReviewWithIdOnly = await prisma.bookReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, BookReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookReview.
     * @param {BookReviewUpsertArgs} args - Arguments to update or create a BookReview.
     * @example
     * // Update or create a BookReview
     * const bookReview = await prisma.bookReview.upsert({
     *   create: {
     *     // ... data to create a BookReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookReview we want to update
     *   }
     * })
     */
    upsert<T extends BookReviewUpsertArgs>(args: SelectSubset<T, BookReviewUpsertArgs<ExtArgs>>): Prisma__BookReviewClient<$Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewCountArgs} args - Arguments to filter BookReviews to count.
     * @example
     * // Count the number of BookReviews
     * const count = await prisma.bookReview.count({
     *   where: {
     *     // ... the filter for the BookReviews we want to count
     *   }
     * })
    **/
    count<T extends BookReviewCountArgs>(
      args?: Subset<T, BookReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookReviewAggregateArgs>(args: Subset<T, BookReviewAggregateArgs>): Prisma.PrismaPromise<GetBookReviewAggregateType<T>>

    /**
     * Group by BookReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookReviewGroupByArgs['orderBy'] }
        : { orderBy?: BookReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookReview model
   */
  readonly fields: BookReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookReview model
   */
  interface BookReviewFieldRefs {
    readonly id: FieldRef<"BookReview", 'Int'>
    readonly reviewerName: FieldRef<"BookReview", 'String'>
    readonly review: FieldRef<"BookReview", 'String'>
    readonly rating: FieldRef<"BookReview", 'Int'>
    readonly bookId: FieldRef<"BookReview", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookReview findUnique
   */
  export type BookReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview findUniqueOrThrow
   */
  export type BookReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview findFirst
   */
  export type BookReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookReviews.
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookReviews.
     */
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * BookReview findFirstOrThrow
   */
  export type BookReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReview to fetch.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookReviews.
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookReviews.
     */
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * BookReview findMany
   */
  export type BookReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter, which BookReviews to fetch.
     */
    where?: BookReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookReviews to fetch.
     */
    orderBy?: BookReviewOrderByWithRelationInput | BookReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookReviews.
     */
    cursor?: BookReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookReviews.
     */
    skip?: number
    distinct?: BookReviewScalarFieldEnum | BookReviewScalarFieldEnum[]
  }

  /**
   * BookReview create
   */
  export type BookReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a BookReview.
     */
    data: XOR<BookReviewCreateInput, BookReviewUncheckedCreateInput>
  }

  /**
   * BookReview createMany
   */
  export type BookReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookReviews.
     */
    data: BookReviewCreateManyInput | BookReviewCreateManyInput[]
  }

  /**
   * BookReview createManyAndReturn
   */
  export type BookReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * The data used to create many BookReviews.
     */
    data: BookReviewCreateManyInput | BookReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookReview update
   */
  export type BookReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a BookReview.
     */
    data: XOR<BookReviewUpdateInput, BookReviewUncheckedUpdateInput>
    /**
     * Choose, which BookReview to update.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview updateMany
   */
  export type BookReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookReviews.
     */
    data: XOR<BookReviewUpdateManyMutationInput, BookReviewUncheckedUpdateManyInput>
    /**
     * Filter which BookReviews to update
     */
    where?: BookReviewWhereInput
    /**
     * Limit how many BookReviews to update.
     */
    limit?: number
  }

  /**
   * BookReview updateManyAndReturn
   */
  export type BookReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * The data used to update BookReviews.
     */
    data: XOR<BookReviewUpdateManyMutationInput, BookReviewUncheckedUpdateManyInput>
    /**
     * Filter which BookReviews to update
     */
    where?: BookReviewWhereInput
    /**
     * Limit how many BookReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookReview upsert
   */
  export type BookReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the BookReview to update in case it exists.
     */
    where: BookReviewWhereUniqueInput
    /**
     * In case the BookReview found by the `where` argument doesn't exist, create a new BookReview with this data.
     */
    create: XOR<BookReviewCreateInput, BookReviewUncheckedCreateInput>
    /**
     * In case the BookReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookReviewUpdateInput, BookReviewUncheckedUpdateInput>
  }

  /**
   * BookReview delete
   */
  export type BookReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
    /**
     * Filter which BookReview to delete.
     */
    where: BookReviewWhereUniqueInput
  }

  /**
   * BookReview deleteMany
   */
  export type BookReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookReviews to delete
     */
    where?: BookReviewWhereInput
    /**
     * Limit how many BookReviews to delete.
     */
    limit?: number
  }

  /**
   * BookReview without action
   */
  export type BookReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: BookReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookReview
     */
    omit?: BookReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    ISBN: 'ISBN',
    title: 'title',
    pageLength: 'pageLength',
    duration: 'duration',
    genre: 'genre',
    authorId: 'authorId'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const PhysicalBookCopyScalarFieldEnum: {
    id: 'id',
    checkedOut: 'checkedOut',
    bookId: 'bookId'
  };

  export type PhysicalBookCopyScalarFieldEnum = (typeof PhysicalBookCopyScalarFieldEnum)[keyof typeof PhysicalBookCopyScalarFieldEnum]


  export const AudioBookCopyScalarFieldEnum: {
    id: 'id',
    checkedOut: 'checkedOut',
    bookId: 'bookId'
  };

  export type AudioBookCopyScalarFieldEnum = (typeof AudioBookCopyScalarFieldEnum)[keyof typeof AudioBookCopyScalarFieldEnum]


  export const BookReviewScalarFieldEnum: {
    id: 'id',
    reviewerName: 'reviewerName',
    review: 'review',
    rating: 'rating',
    bookId: 'bookId'
  };

  export type BookReviewScalarFieldEnum = (typeof BookReviewScalarFieldEnum)[keyof typeof BookReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Genre'
   */
  export type EnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    books?: BookListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    books?: BookListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    firstName?: StringWithAggregatesFilter<"Author"> | string
    lastName?: StringWithAggregatesFilter<"Author"> | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    ISBN?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    pageLength?: IntNullableFilter<"Book"> | number | null
    duration?: IntNullableFilter<"Book"> | number | null
    genre?: EnumGenreFilter<"Book"> | $Enums.Genre
    authorId?: IntFilter<"Book"> | number
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    physicalBooks?: PhysicalBookCopyListRelationFilter
    audioBooks?: AudioBookCopyListRelationFilter
    bookReviews?: BookReviewListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    ISBN?: SortOrder
    title?: SortOrder
    pageLength?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    genre?: SortOrder
    authorId?: SortOrder
    author?: AuthorOrderByWithRelationInput
    physicalBooks?: PhysicalBookCopyOrderByRelationAggregateInput
    audioBooks?: AudioBookCopyOrderByRelationAggregateInput
    bookReviews?: BookReviewOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ISBN?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    pageLength?: IntNullableFilter<"Book"> | number | null
    duration?: IntNullableFilter<"Book"> | number | null
    genre?: EnumGenreFilter<"Book"> | $Enums.Genre
    authorId?: IntFilter<"Book"> | number
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    physicalBooks?: PhysicalBookCopyListRelationFilter
    audioBooks?: AudioBookCopyListRelationFilter
    bookReviews?: BookReviewListRelationFilter
  }, "id" | "ISBN">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    ISBN?: SortOrder
    title?: SortOrder
    pageLength?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    genre?: SortOrder
    authorId?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    ISBN?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    pageLength?: IntNullableWithAggregatesFilter<"Book"> | number | null
    duration?: IntNullableWithAggregatesFilter<"Book"> | number | null
    genre?: EnumGenreWithAggregatesFilter<"Book"> | $Enums.Genre
    authorId?: IntWithAggregatesFilter<"Book"> | number
  }

  export type PhysicalBookCopyWhereInput = {
    AND?: PhysicalBookCopyWhereInput | PhysicalBookCopyWhereInput[]
    OR?: PhysicalBookCopyWhereInput[]
    NOT?: PhysicalBookCopyWhereInput | PhysicalBookCopyWhereInput[]
    id?: IntFilter<"PhysicalBookCopy"> | number
    checkedOut?: BoolFilter<"PhysicalBookCopy"> | boolean
    bookId?: IntFilter<"PhysicalBookCopy"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type PhysicalBookCopyOrderByWithRelationInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type PhysicalBookCopyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhysicalBookCopyWhereInput | PhysicalBookCopyWhereInput[]
    OR?: PhysicalBookCopyWhereInput[]
    NOT?: PhysicalBookCopyWhereInput | PhysicalBookCopyWhereInput[]
    checkedOut?: BoolFilter<"PhysicalBookCopy"> | boolean
    bookId?: IntFilter<"PhysicalBookCopy"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type PhysicalBookCopyOrderByWithAggregationInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
    _count?: PhysicalBookCopyCountOrderByAggregateInput
    _avg?: PhysicalBookCopyAvgOrderByAggregateInput
    _max?: PhysicalBookCopyMaxOrderByAggregateInput
    _min?: PhysicalBookCopyMinOrderByAggregateInput
    _sum?: PhysicalBookCopySumOrderByAggregateInput
  }

  export type PhysicalBookCopyScalarWhereWithAggregatesInput = {
    AND?: PhysicalBookCopyScalarWhereWithAggregatesInput | PhysicalBookCopyScalarWhereWithAggregatesInput[]
    OR?: PhysicalBookCopyScalarWhereWithAggregatesInput[]
    NOT?: PhysicalBookCopyScalarWhereWithAggregatesInput | PhysicalBookCopyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhysicalBookCopy"> | number
    checkedOut?: BoolWithAggregatesFilter<"PhysicalBookCopy"> | boolean
    bookId?: IntWithAggregatesFilter<"PhysicalBookCopy"> | number
  }

  export type AudioBookCopyWhereInput = {
    AND?: AudioBookCopyWhereInput | AudioBookCopyWhereInput[]
    OR?: AudioBookCopyWhereInput[]
    NOT?: AudioBookCopyWhereInput | AudioBookCopyWhereInput[]
    id?: IntFilter<"AudioBookCopy"> | number
    checkedOut?: BoolFilter<"AudioBookCopy"> | boolean
    bookId?: IntFilter<"AudioBookCopy"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type AudioBookCopyOrderByWithRelationInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type AudioBookCopyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AudioBookCopyWhereInput | AudioBookCopyWhereInput[]
    OR?: AudioBookCopyWhereInput[]
    NOT?: AudioBookCopyWhereInput | AudioBookCopyWhereInput[]
    checkedOut?: BoolFilter<"AudioBookCopy"> | boolean
    bookId?: IntFilter<"AudioBookCopy"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type AudioBookCopyOrderByWithAggregationInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
    _count?: AudioBookCopyCountOrderByAggregateInput
    _avg?: AudioBookCopyAvgOrderByAggregateInput
    _max?: AudioBookCopyMaxOrderByAggregateInput
    _min?: AudioBookCopyMinOrderByAggregateInput
    _sum?: AudioBookCopySumOrderByAggregateInput
  }

  export type AudioBookCopyScalarWhereWithAggregatesInput = {
    AND?: AudioBookCopyScalarWhereWithAggregatesInput | AudioBookCopyScalarWhereWithAggregatesInput[]
    OR?: AudioBookCopyScalarWhereWithAggregatesInput[]
    NOT?: AudioBookCopyScalarWhereWithAggregatesInput | AudioBookCopyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AudioBookCopy"> | number
    checkedOut?: BoolWithAggregatesFilter<"AudioBookCopy"> | boolean
    bookId?: IntWithAggregatesFilter<"AudioBookCopy"> | number
  }

  export type BookReviewWhereInput = {
    AND?: BookReviewWhereInput | BookReviewWhereInput[]
    OR?: BookReviewWhereInput[]
    NOT?: BookReviewWhereInput | BookReviewWhereInput[]
    id?: IntFilter<"BookReview"> | number
    reviewerName?: StringFilter<"BookReview"> | string
    review?: StringFilter<"BookReview"> | string
    rating?: IntFilter<"BookReview"> | number
    bookId?: IntFilter<"BookReview"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookReviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewerName?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    bookId?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookReviewWhereInput | BookReviewWhereInput[]
    OR?: BookReviewWhereInput[]
    NOT?: BookReviewWhereInput | BookReviewWhereInput[]
    reviewerName?: StringFilter<"BookReview"> | string
    review?: StringFilter<"BookReview"> | string
    rating?: IntFilter<"BookReview"> | number
    bookId?: IntFilter<"BookReview"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type BookReviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewerName?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    bookId?: SortOrder
    _count?: BookReviewCountOrderByAggregateInput
    _avg?: BookReviewAvgOrderByAggregateInput
    _max?: BookReviewMaxOrderByAggregateInput
    _min?: BookReviewMinOrderByAggregateInput
    _sum?: BookReviewSumOrderByAggregateInput
  }

  export type BookReviewScalarWhereWithAggregatesInput = {
    AND?: BookReviewScalarWhereWithAggregatesInput | BookReviewScalarWhereWithAggregatesInput[]
    OR?: BookReviewScalarWhereWithAggregatesInput[]
    NOT?: BookReviewScalarWhereWithAggregatesInput | BookReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookReview"> | number
    reviewerName?: StringWithAggregatesFilter<"BookReview"> | string
    review?: StringWithAggregatesFilter<"BookReview"> | string
    rating?: IntWithAggregatesFilter<"BookReview"> | number
    bookId?: IntWithAggregatesFilter<"BookReview"> | number
  }

  export type AuthorCreateInput = {
    firstName: string
    lastName: string
    books?: BookCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    books?: BookUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
  }

  export type AuthorUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateInput = {
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    author: AuthorCreateNestedOneWithoutBooksInput
    physicalBooks?: PhysicalBookCopyCreateNestedManyWithoutBookInput
    audioBooks?: AudioBookCopyCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    authorId: number
    physicalBooks?: PhysicalBookCopyUncheckedCreateNestedManyWithoutBookInput
    audioBooks?: AudioBookCopyUncheckedCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    physicalBooks?: PhysicalBookCopyUpdateManyWithoutBookNestedInput
    audioBooks?: AudioBookCopyUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    authorId?: IntFieldUpdateOperationsInput | number
    physicalBooks?: PhysicalBookCopyUncheckedUpdateManyWithoutBookNestedInput
    audioBooks?: AudioBookCopyUncheckedUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    authorId: number
  }

  export type BookUpdateManyMutationInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PhysicalBookCopyCreateInput = {
    checkedOut: boolean
    book: BookCreateNestedOneWithoutPhysicalBooksInput
  }

  export type PhysicalBookCopyUncheckedCreateInput = {
    id?: number
    checkedOut: boolean
    bookId: number
  }

  export type PhysicalBookCopyUpdateInput = {
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutPhysicalBooksNestedInput
  }

  export type PhysicalBookCopyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type PhysicalBookCopyCreateManyInput = {
    id?: number
    checkedOut: boolean
    bookId: number
  }

  export type PhysicalBookCopyUpdateManyMutationInput = {
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhysicalBookCopyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type AudioBookCopyCreateInput = {
    checkedOut: boolean
    book: BookCreateNestedOneWithoutAudioBooksInput
  }

  export type AudioBookCopyUncheckedCreateInput = {
    id?: number
    checkedOut: boolean
    bookId: number
  }

  export type AudioBookCopyUpdateInput = {
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutAudioBooksNestedInput
  }

  export type AudioBookCopyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type AudioBookCopyCreateManyInput = {
    id?: number
    checkedOut: boolean
    bookId: number
  }

  export type AudioBookCopyUpdateManyMutationInput = {
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioBookCopyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type BookReviewCreateInput = {
    reviewerName: string
    review: string
    rating: number
    book: BookCreateNestedOneWithoutBookReviewsInput
  }

  export type BookReviewUncheckedCreateInput = {
    id?: number
    reviewerName: string
    review: string
    rating: number
    bookId: number
  }

  export type BookReviewUpdateInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    book?: BookUpdateOneRequiredWithoutBookReviewsNestedInput
  }

  export type BookReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type BookReviewCreateManyInput = {
    id?: number
    reviewerName: string
    review: string
    rating: number
    bookId: number
  }

  export type BookReviewUpdateManyMutationInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type BookReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type PhysicalBookCopyListRelationFilter = {
    every?: PhysicalBookCopyWhereInput
    some?: PhysicalBookCopyWhereInput
    none?: PhysicalBookCopyWhereInput
  }

  export type AudioBookCopyListRelationFilter = {
    every?: AudioBookCopyWhereInput
    some?: AudioBookCopyWhereInput
    none?: AudioBookCopyWhereInput
  }

  export type BookReviewListRelationFilter = {
    every?: BookReviewWhereInput
    some?: BookReviewWhereInput
    none?: BookReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhysicalBookCopyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudioBookCopyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    ISBN?: SortOrder
    title?: SortOrder
    pageLength?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    authorId?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    pageLength?: SortOrder
    duration?: SortOrder
    authorId?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    ISBN?: SortOrder
    title?: SortOrder
    pageLength?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    authorId?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    ISBN?: SortOrder
    title?: SortOrder
    pageLength?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    authorId?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    pageLength?: SortOrder
    duration?: SortOrder
    authorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenreFilter<$PrismaModel>
    _max?: NestedEnumGenreFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type PhysicalBookCopyCountOrderByAggregateInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookCopyAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookCopyMaxOrderByAggregateInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookCopyMinOrderByAggregateInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
  }

  export type PhysicalBookCopySumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AudioBookCopyCountOrderByAggregateInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
  }

  export type AudioBookCopyAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type AudioBookCopyMaxOrderByAggregateInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
  }

  export type AudioBookCopyMinOrderByAggregateInput = {
    id?: SortOrder
    checkedOut?: SortOrder
    bookId?: SortOrder
  }

  export type AudioBookCopySumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
  }

  export type BookReviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewerName?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    bookId?: SortOrder
  }

  export type BookReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    bookId?: SortOrder
  }

  export type BookReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewerName?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    bookId?: SortOrder
  }

  export type BookReviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewerName?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    bookId?: SortOrder
  }

  export type BookReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    bookId?: SortOrder
  }

  export type BookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type PhysicalBookCopyCreateNestedManyWithoutBookInput = {
    create?: XOR<PhysicalBookCopyCreateWithoutBookInput, PhysicalBookCopyUncheckedCreateWithoutBookInput> | PhysicalBookCopyCreateWithoutBookInput[] | PhysicalBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCopyCreateOrConnectWithoutBookInput | PhysicalBookCopyCreateOrConnectWithoutBookInput[]
    createMany?: PhysicalBookCopyCreateManyBookInputEnvelope
    connect?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
  }

  export type AudioBookCopyCreateNestedManyWithoutBookInput = {
    create?: XOR<AudioBookCopyCreateWithoutBookInput, AudioBookCopyUncheckedCreateWithoutBookInput> | AudioBookCopyCreateWithoutBookInput[] | AudioBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AudioBookCopyCreateOrConnectWithoutBookInput | AudioBookCopyCreateOrConnectWithoutBookInput[]
    createMany?: AudioBookCopyCreateManyBookInputEnvelope
    connect?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
  }

  export type BookReviewCreateNestedManyWithoutBookInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
  }

  export type PhysicalBookCopyUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<PhysicalBookCopyCreateWithoutBookInput, PhysicalBookCopyUncheckedCreateWithoutBookInput> | PhysicalBookCopyCreateWithoutBookInput[] | PhysicalBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCopyCreateOrConnectWithoutBookInput | PhysicalBookCopyCreateOrConnectWithoutBookInput[]
    createMany?: PhysicalBookCopyCreateManyBookInputEnvelope
    connect?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
  }

  export type AudioBookCopyUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<AudioBookCopyCreateWithoutBookInput, AudioBookCopyUncheckedCreateWithoutBookInput> | AudioBookCopyCreateWithoutBookInput[] | AudioBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AudioBookCopyCreateOrConnectWithoutBookInput | AudioBookCopyCreateOrConnectWithoutBookInput[]
    createMany?: AudioBookCopyCreateManyBookInputEnvelope
    connect?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
  }

  export type BookReviewUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenreFieldUpdateOperationsInput = {
    set?: $Enums.Genre
  }

  export type AuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    upsert?: AuthorUpsertWithoutBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBooksInput, AuthorUpdateWithoutBooksInput>, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type PhysicalBookCopyUpdateManyWithoutBookNestedInput = {
    create?: XOR<PhysicalBookCopyCreateWithoutBookInput, PhysicalBookCopyUncheckedCreateWithoutBookInput> | PhysicalBookCopyCreateWithoutBookInput[] | PhysicalBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCopyCreateOrConnectWithoutBookInput | PhysicalBookCopyCreateOrConnectWithoutBookInput[]
    upsert?: PhysicalBookCopyUpsertWithWhereUniqueWithoutBookInput | PhysicalBookCopyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: PhysicalBookCopyCreateManyBookInputEnvelope
    set?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    disconnect?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    delete?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    connect?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    update?: PhysicalBookCopyUpdateWithWhereUniqueWithoutBookInput | PhysicalBookCopyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: PhysicalBookCopyUpdateManyWithWhereWithoutBookInput | PhysicalBookCopyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: PhysicalBookCopyScalarWhereInput | PhysicalBookCopyScalarWhereInput[]
  }

  export type AudioBookCopyUpdateManyWithoutBookNestedInput = {
    create?: XOR<AudioBookCopyCreateWithoutBookInput, AudioBookCopyUncheckedCreateWithoutBookInput> | AudioBookCopyCreateWithoutBookInput[] | AudioBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AudioBookCopyCreateOrConnectWithoutBookInput | AudioBookCopyCreateOrConnectWithoutBookInput[]
    upsert?: AudioBookCopyUpsertWithWhereUniqueWithoutBookInput | AudioBookCopyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AudioBookCopyCreateManyBookInputEnvelope
    set?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    disconnect?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    delete?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    connect?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    update?: AudioBookCopyUpdateWithWhereUniqueWithoutBookInput | AudioBookCopyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AudioBookCopyUpdateManyWithWhereWithoutBookInput | AudioBookCopyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AudioBookCopyScalarWhereInput | AudioBookCopyScalarWhereInput[]
  }

  export type BookReviewUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    upsert?: BookReviewUpsertWithWhereUniqueWithoutBookInput | BookReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    set?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    disconnect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    delete?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    update?: BookReviewUpdateWithWhereUniqueWithoutBookInput | BookReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookReviewUpdateManyWithWhereWithoutBookInput | BookReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
  }

  export type PhysicalBookCopyUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<PhysicalBookCopyCreateWithoutBookInput, PhysicalBookCopyUncheckedCreateWithoutBookInput> | PhysicalBookCopyCreateWithoutBookInput[] | PhysicalBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: PhysicalBookCopyCreateOrConnectWithoutBookInput | PhysicalBookCopyCreateOrConnectWithoutBookInput[]
    upsert?: PhysicalBookCopyUpsertWithWhereUniqueWithoutBookInput | PhysicalBookCopyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: PhysicalBookCopyCreateManyBookInputEnvelope
    set?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    disconnect?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    delete?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    connect?: PhysicalBookCopyWhereUniqueInput | PhysicalBookCopyWhereUniqueInput[]
    update?: PhysicalBookCopyUpdateWithWhereUniqueWithoutBookInput | PhysicalBookCopyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: PhysicalBookCopyUpdateManyWithWhereWithoutBookInput | PhysicalBookCopyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: PhysicalBookCopyScalarWhereInput | PhysicalBookCopyScalarWhereInput[]
  }

  export type AudioBookCopyUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<AudioBookCopyCreateWithoutBookInput, AudioBookCopyUncheckedCreateWithoutBookInput> | AudioBookCopyCreateWithoutBookInput[] | AudioBookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AudioBookCopyCreateOrConnectWithoutBookInput | AudioBookCopyCreateOrConnectWithoutBookInput[]
    upsert?: AudioBookCopyUpsertWithWhereUniqueWithoutBookInput | AudioBookCopyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AudioBookCopyCreateManyBookInputEnvelope
    set?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    disconnect?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    delete?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    connect?: AudioBookCopyWhereUniqueInput | AudioBookCopyWhereUniqueInput[]
    update?: AudioBookCopyUpdateWithWhereUniqueWithoutBookInput | AudioBookCopyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AudioBookCopyUpdateManyWithWhereWithoutBookInput | AudioBookCopyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AudioBookCopyScalarWhereInput | AudioBookCopyScalarWhereInput[]
  }

  export type BookReviewUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput> | BookReviewCreateWithoutBookInput[] | BookReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput | BookReviewCreateOrConnectWithoutBookInput[]
    upsert?: BookReviewUpsertWithWhereUniqueWithoutBookInput | BookReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookReviewCreateManyBookInputEnvelope
    set?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    disconnect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    delete?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    connect?: BookReviewWhereUniqueInput | BookReviewWhereUniqueInput[]
    update?: BookReviewUpdateWithWhereUniqueWithoutBookInput | BookReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookReviewUpdateManyWithWhereWithoutBookInput | BookReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutPhysicalBooksInput = {
    create?: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutPhysicalBooksInput
    connect?: BookWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookUpdateOneRequiredWithoutPhysicalBooksNestedInput = {
    create?: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutPhysicalBooksInput
    upsert?: BookUpsertWithoutPhysicalBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutPhysicalBooksInput, BookUpdateWithoutPhysicalBooksInput>, BookUncheckedUpdateWithoutPhysicalBooksInput>
  }

  export type BookCreateNestedOneWithoutAudioBooksInput = {
    create?: XOR<BookCreateWithoutAudioBooksInput, BookUncheckedCreateWithoutAudioBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutAudioBooksInput
    connect?: BookWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutAudioBooksNestedInput = {
    create?: XOR<BookCreateWithoutAudioBooksInput, BookUncheckedCreateWithoutAudioBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutAudioBooksInput
    upsert?: BookUpsertWithoutAudioBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutAudioBooksInput, BookUpdateWithoutAudioBooksInput>, BookUncheckedUpdateWithoutAudioBooksInput>
  }

  export type BookCreateNestedOneWithoutBookReviewsInput = {
    create?: XOR<BookCreateWithoutBookReviewsInput, BookUncheckedCreateWithoutBookReviewsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookReviewsInput
    connect?: BookWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutBookReviewsNestedInput = {
    create?: XOR<BookCreateWithoutBookReviewsInput, BookUncheckedCreateWithoutBookReviewsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBookReviewsInput
    upsert?: BookUpsertWithoutBookReviewsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBookReviewsInput, BookUpdateWithoutBookReviewsInput>, BookUncheckedUpdateWithoutBookReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[]
    notIn?: $Enums.Genre[]
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenreFilter<$PrismaModel>
    _max?: NestedEnumGenreFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookCreateWithoutAuthorInput = {
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    physicalBooks?: PhysicalBookCopyCreateNestedManyWithoutBookInput
    audioBooks?: AudioBookCopyCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorInput = {
    id?: number
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    physicalBooks?: PhysicalBookCopyUncheckedCreateNestedManyWithoutBookInput
    audioBooks?: AudioBookCopyUncheckedCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookCreateManyAuthorInputEnvelope = {
    data: BookCreateManyAuthorInput | BookCreateManyAuthorInput[]
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    ISBN?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    pageLength?: IntNullableFilter<"Book"> | number | null
    duration?: IntNullableFilter<"Book"> | number | null
    genre?: EnumGenreFilter<"Book"> | $Enums.Genre
    authorId?: IntFilter<"Book"> | number
  }

  export type AuthorCreateWithoutBooksInput = {
    firstName: string
    lastName: string
  }

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: number
    firstName: string
    lastName: string
  }

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
  }

  export type PhysicalBookCopyCreateWithoutBookInput = {
    checkedOut: boolean
  }

  export type PhysicalBookCopyUncheckedCreateWithoutBookInput = {
    id?: number
    checkedOut: boolean
  }

  export type PhysicalBookCopyCreateOrConnectWithoutBookInput = {
    where: PhysicalBookCopyWhereUniqueInput
    create: XOR<PhysicalBookCopyCreateWithoutBookInput, PhysicalBookCopyUncheckedCreateWithoutBookInput>
  }

  export type PhysicalBookCopyCreateManyBookInputEnvelope = {
    data: PhysicalBookCopyCreateManyBookInput | PhysicalBookCopyCreateManyBookInput[]
  }

  export type AudioBookCopyCreateWithoutBookInput = {
    checkedOut: boolean
  }

  export type AudioBookCopyUncheckedCreateWithoutBookInput = {
    id?: number
    checkedOut: boolean
  }

  export type AudioBookCopyCreateOrConnectWithoutBookInput = {
    where: AudioBookCopyWhereUniqueInput
    create: XOR<AudioBookCopyCreateWithoutBookInput, AudioBookCopyUncheckedCreateWithoutBookInput>
  }

  export type AudioBookCopyCreateManyBookInputEnvelope = {
    data: AudioBookCopyCreateManyBookInput | AudioBookCopyCreateManyBookInput[]
  }

  export type BookReviewCreateWithoutBookInput = {
    reviewerName: string
    review: string
    rating: number
  }

  export type BookReviewUncheckedCreateWithoutBookInput = {
    id?: number
    reviewerName: string
    review: string
    rating: number
  }

  export type BookReviewCreateOrConnectWithoutBookInput = {
    where: BookReviewWhereUniqueInput
    create: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput>
  }

  export type BookReviewCreateManyBookInputEnvelope = {
    data: BookReviewCreateManyBookInput | BookReviewCreateManyBookInput[]
  }

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateWithoutBooksInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type PhysicalBookCopyUpsertWithWhereUniqueWithoutBookInput = {
    where: PhysicalBookCopyWhereUniqueInput
    update: XOR<PhysicalBookCopyUpdateWithoutBookInput, PhysicalBookCopyUncheckedUpdateWithoutBookInput>
    create: XOR<PhysicalBookCopyCreateWithoutBookInput, PhysicalBookCopyUncheckedCreateWithoutBookInput>
  }

  export type PhysicalBookCopyUpdateWithWhereUniqueWithoutBookInput = {
    where: PhysicalBookCopyWhereUniqueInput
    data: XOR<PhysicalBookCopyUpdateWithoutBookInput, PhysicalBookCopyUncheckedUpdateWithoutBookInput>
  }

  export type PhysicalBookCopyUpdateManyWithWhereWithoutBookInput = {
    where: PhysicalBookCopyScalarWhereInput
    data: XOR<PhysicalBookCopyUpdateManyMutationInput, PhysicalBookCopyUncheckedUpdateManyWithoutBookInput>
  }

  export type PhysicalBookCopyScalarWhereInput = {
    AND?: PhysicalBookCopyScalarWhereInput | PhysicalBookCopyScalarWhereInput[]
    OR?: PhysicalBookCopyScalarWhereInput[]
    NOT?: PhysicalBookCopyScalarWhereInput | PhysicalBookCopyScalarWhereInput[]
    id?: IntFilter<"PhysicalBookCopy"> | number
    checkedOut?: BoolFilter<"PhysicalBookCopy"> | boolean
    bookId?: IntFilter<"PhysicalBookCopy"> | number
  }

  export type AudioBookCopyUpsertWithWhereUniqueWithoutBookInput = {
    where: AudioBookCopyWhereUniqueInput
    update: XOR<AudioBookCopyUpdateWithoutBookInput, AudioBookCopyUncheckedUpdateWithoutBookInput>
    create: XOR<AudioBookCopyCreateWithoutBookInput, AudioBookCopyUncheckedCreateWithoutBookInput>
  }

  export type AudioBookCopyUpdateWithWhereUniqueWithoutBookInput = {
    where: AudioBookCopyWhereUniqueInput
    data: XOR<AudioBookCopyUpdateWithoutBookInput, AudioBookCopyUncheckedUpdateWithoutBookInput>
  }

  export type AudioBookCopyUpdateManyWithWhereWithoutBookInput = {
    where: AudioBookCopyScalarWhereInput
    data: XOR<AudioBookCopyUpdateManyMutationInput, AudioBookCopyUncheckedUpdateManyWithoutBookInput>
  }

  export type AudioBookCopyScalarWhereInput = {
    AND?: AudioBookCopyScalarWhereInput | AudioBookCopyScalarWhereInput[]
    OR?: AudioBookCopyScalarWhereInput[]
    NOT?: AudioBookCopyScalarWhereInput | AudioBookCopyScalarWhereInput[]
    id?: IntFilter<"AudioBookCopy"> | number
    checkedOut?: BoolFilter<"AudioBookCopy"> | boolean
    bookId?: IntFilter<"AudioBookCopy"> | number
  }

  export type BookReviewUpsertWithWhereUniqueWithoutBookInput = {
    where: BookReviewWhereUniqueInput
    update: XOR<BookReviewUpdateWithoutBookInput, BookReviewUncheckedUpdateWithoutBookInput>
    create: XOR<BookReviewCreateWithoutBookInput, BookReviewUncheckedCreateWithoutBookInput>
  }

  export type BookReviewUpdateWithWhereUniqueWithoutBookInput = {
    where: BookReviewWhereUniqueInput
    data: XOR<BookReviewUpdateWithoutBookInput, BookReviewUncheckedUpdateWithoutBookInput>
  }

  export type BookReviewUpdateManyWithWhereWithoutBookInput = {
    where: BookReviewScalarWhereInput
    data: XOR<BookReviewUpdateManyMutationInput, BookReviewUncheckedUpdateManyWithoutBookInput>
  }

  export type BookReviewScalarWhereInput = {
    AND?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
    OR?: BookReviewScalarWhereInput[]
    NOT?: BookReviewScalarWhereInput | BookReviewScalarWhereInput[]
    id?: IntFilter<"BookReview"> | number
    reviewerName?: StringFilter<"BookReview"> | string
    review?: StringFilter<"BookReview"> | string
    rating?: IntFilter<"BookReview"> | number
    bookId?: IntFilter<"BookReview"> | number
  }

  export type BookCreateWithoutPhysicalBooksInput = {
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    author: AuthorCreateNestedOneWithoutBooksInput
    audioBooks?: AudioBookCopyCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutPhysicalBooksInput = {
    id?: number
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    authorId: number
    audioBooks?: AudioBookCopyUncheckedCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutPhysicalBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
  }

  export type BookUpsertWithoutPhysicalBooksInput = {
    update: XOR<BookUpdateWithoutPhysicalBooksInput, BookUncheckedUpdateWithoutPhysicalBooksInput>
    create: XOR<BookCreateWithoutPhysicalBooksInput, BookUncheckedCreateWithoutPhysicalBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutPhysicalBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutPhysicalBooksInput, BookUncheckedUpdateWithoutPhysicalBooksInput>
  }

  export type BookUpdateWithoutPhysicalBooksInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    audioBooks?: AudioBookCopyUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutPhysicalBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    authorId?: IntFieldUpdateOperationsInput | number
    audioBooks?: AudioBookCopyUncheckedUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutAudioBooksInput = {
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    author: AuthorCreateNestedOneWithoutBooksInput
    physicalBooks?: PhysicalBookCopyCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAudioBooksInput = {
    id?: number
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    authorId: number
    physicalBooks?: PhysicalBookCopyUncheckedCreateNestedManyWithoutBookInput
    bookReviews?: BookReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAudioBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAudioBooksInput, BookUncheckedCreateWithoutAudioBooksInput>
  }

  export type BookUpsertWithoutAudioBooksInput = {
    update: XOR<BookUpdateWithoutAudioBooksInput, BookUncheckedUpdateWithoutAudioBooksInput>
    create: XOR<BookCreateWithoutAudioBooksInput, BookUncheckedCreateWithoutAudioBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutAudioBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutAudioBooksInput, BookUncheckedUpdateWithoutAudioBooksInput>
  }

  export type BookUpdateWithoutAudioBooksInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    physicalBooks?: PhysicalBookCopyUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAudioBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    authorId?: IntFieldUpdateOperationsInput | number
    physicalBooks?: PhysicalBookCopyUncheckedUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutBookReviewsInput = {
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    author: AuthorCreateNestedOneWithoutBooksInput
    physicalBooks?: PhysicalBookCopyCreateNestedManyWithoutBookInput
    audioBooks?: AudioBookCopyCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBookReviewsInput = {
    id?: number
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
    authorId: number
    physicalBooks?: PhysicalBookCopyUncheckedCreateNestedManyWithoutBookInput
    audioBooks?: AudioBookCopyUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutBookReviewsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBookReviewsInput, BookUncheckedCreateWithoutBookReviewsInput>
  }

  export type BookUpsertWithoutBookReviewsInput = {
    update: XOR<BookUpdateWithoutBookReviewsInput, BookUncheckedUpdateWithoutBookReviewsInput>
    create: XOR<BookCreateWithoutBookReviewsInput, BookUncheckedCreateWithoutBookReviewsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBookReviewsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBookReviewsInput, BookUncheckedUpdateWithoutBookReviewsInput>
  }

  export type BookUpdateWithoutBookReviewsInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    physicalBooks?: PhysicalBookCopyUpdateManyWithoutBookNestedInput
    audioBooks?: AudioBookCopyUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBookReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    authorId?: IntFieldUpdateOperationsInput | number
    physicalBooks?: PhysicalBookCopyUncheckedUpdateManyWithoutBookNestedInput
    audioBooks?: AudioBookCopyUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyAuthorInput = {
    id?: number
    ISBN: string
    title: string
    pageLength?: number | null
    duration?: number | null
    genre: $Enums.Genre
  }

  export type BookUpdateWithoutAuthorInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    physicalBooks?: PhysicalBookCopyUpdateManyWithoutBookNestedInput
    audioBooks?: AudioBookCopyUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    physicalBooks?: PhysicalBookCopyUncheckedUpdateManyWithoutBookNestedInput
    audioBooks?: AudioBookCopyUncheckedUpdateManyWithoutBookNestedInput
    bookReviews?: BookReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageLength?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
  }

  export type PhysicalBookCopyCreateManyBookInput = {
    id?: number
    checkedOut: boolean
  }

  export type AudioBookCopyCreateManyBookInput = {
    id?: number
    checkedOut: boolean
  }

  export type BookReviewCreateManyBookInput = {
    id?: number
    reviewerName: string
    review: string
    rating: number
  }

  export type PhysicalBookCopyUpdateWithoutBookInput = {
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhysicalBookCopyUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhysicalBookCopyUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioBookCopyUpdateWithoutBookInput = {
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioBookCopyUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioBookCopyUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedOut?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookReviewUpdateWithoutBookInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type BookReviewUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type BookReviewUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}