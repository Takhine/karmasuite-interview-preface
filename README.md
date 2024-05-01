# karmasuite-interview-preface

KarmaSuite helps non-profit accountants create, track and manage their expenses, grants, and other financial data.

## Glossary

* Expense
  * These are items that non-profits need to pay for.
* Fund
  * Sometimes referred to as `Grant` or `Contract`, this is a funding source that can be used to pay for expenses. These grants have numerous restrictions that prevent them from being used on whatever expense.
* Cost Center
  *  A department or operation of the non-profit that incurs expenses.
* Account
  * These are items that expenses can be created for. For example, you can have an "Office Supplies" account that expenses are created for.

## Context

To give a simplified representation of KarmaSuite:

With KarmaSuite, non-profits upload their grants and expenses then use tools KarmaSuite provides to assign restricted grants to expenses in compliant ways. With this, non-profits receive numerous benefits:
1. Have 1 place to view all of their grant details.
2. Have 1 place to view all of their expenses.
3. Improve visibility to seeing the state of their grants (e.g. remaining funds).
4. Removes significant manual work in staying compliant to grant restrictions and finding grants to assign to expenses.
5. And more... see: https://www.karmasuitesoftware.com/

## Interview Notes

In this interview, you will clone another GitHub repo and complete the implementation of an API endpoint using the data that exists in a SQLite database, then representing the data from this endpoint on the frontend. In this preface, you can find the data-models that will be used during the interview (in `src/schema/tables.ts`), along with examples of how data can be queried with Drizzle (in `src/index.ts`). Note that the GitHub repo you will be cloning during the interview will use the exact same directory structure and database as in this challenge (including additional files for the partial API endpoint and a home page).

You are expected to have looked over the data-models before the interview. You may ask questions about this preface at the start of the interview if anything is unclear.

## Entity Relation Diagram

![ERD](https://github.com/karmasuite/karmasuite-interview-preface/blob/main/assets/ERD.png?raw=true)

## Preface Commands

### Important!

Before running any of these commands, ensure that you are using a version of Node.js that is v18.17.0 or newer. The challenge uses a version of Next.js that will require at least this Node.js version.

This preface and the interview will use `pnpm`, so make sure to install it:

```bash
# install pnpm
npm install -g pnpm
# install dependencies
pnpm install
```

* See the data and all tables:

```bash
pnpm run drizzle:studio
```

* Run the Next.js app and try the queries at http://localhost:3000/api/test-queries

```bash
pnpm start
```

Some of the tools that will be used in the interview:
1. [drizzle-orm](https://orm.drizzle.team/)
2. [@tanstack/react-query](https://tanstack.com/query/latest)
3. [next](https://nextjs.org/)
4. [typescript](https://www.typescriptlang.org/)

## Do before the interview!

We would like to ensure that you are prepared for this interview. So to do that, we are going to require that you complete a small coding exercise that we will check at the beginning of the interview.

If you do not have this to present at the beginning of the interview, the interview will be concluded immediately.

### Requirements
1. Complete the implementation of the /api/expenses route so that the api returns a list of expense names and their associated account codes.
2. On the home page (http://localhost:3000/), render the data that you queried in step (1) (styling does not matter).


### Practice Questions

#### Drizzle/Sqlite
1. Get all cost centers where budget is greater than 'N' and groupBy budget range
2. Get all funds

#### Next.js
1. Make an api endpoint for getting all funds and fund allocations
2. Make an api endpoint for getting all cost centers and grouped
3. Use getServerSideProps to return the data to the view
4. Implement a common Layout in next.js
5. Common util for requesting API
6. Implement basic private route logic

#### React Query
1. Implement hook for expenses (infinite scroll)
2. Implement hook for funds as well as cost centers
3. Dependent query with expense

#### React
1. Implement Context API (Syntax and usage)
2. Implement a custom hook for scroll pagination (useQuery)
3. Implement a custom hook for delaying API response (useDelay)

#### JS
1. Flattening an Array
2. Flattening an Object
3. Map, Set
4. forEach
5. reduce hof

#### All of the above
1. On scroll pagination
2. Sorting and Filtering by ID, budget range etc
3. Dynamic URL for expense by id and related details
4. Available grants for specific expenses
5. Assign new cost center to expense (Practice Updating)
5. Insert a new expense (Practice Inserting)
6. Delete a cost center