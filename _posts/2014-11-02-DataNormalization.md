---
title: "Data Normalization"
categories:
  - IT
tags:
  - Database
  - Normalization
last_modified_at: 2014-11-02T12:00:00-10:00
---

**[Data Normalization](https://en.wikipedia.org/wiki/Database_normalization)**  is the process of structuring a relational database in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity.

Normalization entails organizing the columns (attributes) and tables (relations) of a database to ensure that their dependencies are properly enforced by database integrity constraints. It is accomplished by applying some formal rules either by a process of synthesis (creating a new database design) or decomposition (improving an existing database design). 

## Normal forms

The objectives of normalization beyond 1NF (first normal form):

- To free the collection of relations from undesirable insertion, update and deletion dependencies.
- To reduce the need for restructuring the collection of relations, as new types of data are introduced, and thus increase the life span of application programs.
- To make the relational model more informative to users.
- To make the collection of relations neutral to the query statistics, where these statistics are liable to change as time goes by.

### UN

[Unnormalized form](https://en.wikipedia.org/wiki/Unnormalized_form)

### 1NF

[First normal form](https://en.wikipedia.org/wiki/First_normal_form) is a property of a relation in a relational database. A relation is in first normal form if and only if the domain of each attribute contains only atomic (indivisible) values, and the value of each attribute contains only a single value from that domain.

First normal form enforces these criteria:

- Eliminate repeating groups in individual tables
- Create a separate table for each set of related data
- Identify each set of related data with a _primary key_

### 2NF

[Second normal form](https://en.wikipedia.org/wiki/Second_normal_form) is a normal form used in database normalization.

A relation is in the second normal form if it fulfills the following two requirements:

- It is in first normal form.
- It does not have any _non-prime attribute_ that is functionally dependent on any proper subset of any candidate key of the relation. **A non-prime attribute of a relation** is an attribute that is not a part of any candidate key of the relation.

### 3NF

[Third normal form](https://en.wikipedia.org/wiki/Third_normal_form) is a [database schema](https://en.wikipedia.org/wiki/Database_schema) design approach for relational databases which uses normalizing principles to

 - reduce the duplication of data
 - avoid data anomalies
 - ensure referential integrity
 - simplify data management

 A database relation (e.g. a database table) is said to meet third normal form standards if all the attributes (e.g. database columns) are functionally dependent on _solely the primary key_.

### EKNF

[Elementary key normal form](https://en.wikipedia.org/wiki/Elementary_key_normal_form) is a subtle enhancement on third normal form, thus EKNF tables are in 3NF by definition. This happens when there is more than one unique compound key and they overlap. Such cases can cause redundant information in the overlapping column(s). 

### BCNF

[Boyce–Codd normal form (or BCNF or 3.5NF)](https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form) is a normal form used in database normalization. It is a slightly stronger version of the third normal form (3NF).

### 4NF

[Fourth normal form](https://en.wikipedia.org/wiki/Fourth_normal_form) is a normal form used in database normalization. 4NF is concerned with a more general type of dependency known as a [multivalued dependency](https://en.wikipedia.org/wiki/Multivalued_dependency). Multivalued dependency is a full constraint between two sets of attributes in a relation. 

### ETNF

[Essential tuple normal form](https://en.wikipedia.org/wiki/Essential_tuple_normal_form)

### 5NF

[Fifth normal form](https://en.wikipedia.org/wiki/Fifth_normal_form) also known as **project-join normal form (PJ/NF)**, is a level of database normalization designed to reduce redundancy in relational databases recording multi-valued facts by isolating semantically related multiple relationships. A table is said to be in the 5NF if and only if every non-trivial [join dependency](https://en.wikipedia.org/wiki/Join_dependency) in that table is implied by the candidate keys. 

### DKNF

[Domain-key normal form](https://en.wikipedia.org/wiki/Domain-key_normal_form) is a normal form used in database normalization which requires that the database contains no constraints other than domain constraints and key constraints.

A domain constraint specifies the permissible values for a given attribute, while a key constraint specifies the attributes that uniquely identify a row in a given table. The domain/key normal form is achieved when every constraint on the relation is a [logical consequence](https://en.wikipedia.org/wiki/Logical_consequence) of the definition of keys and domains, and enforcing key and domain restraints and conditions causes all constraints to be met. Thus, it avoids all non-temporal anomalies. 

### 6NF

[Sixth normal form](https://en.wikipedia.org/wiki/Sixth_normal_form) is intended to decompose relation variables to irreducible components. Though this may be relatively unimportant for non-temporal relation variables, it can be important when dealing with temporal variables or other interval data.

| Features | UNF (1970) | 1NF (1970) | 2NF (1971) | 3NF (1971) | EKNF (1982) | BCNF (1974) | 4NF (1977) | ETNF (2012) | 5NF (1979) | DKNF (1981) | 6NF (2003) |
| -------: | ---------- | ---------- | ---------- | ---------- | ----------- | ----------- | ---------- | ----------- | ---------- | ----------- | ---------- |
| Primary key (no duplicate tuples) | Maybe | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| No repeating groups | Maybe | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Atomic columns (cells have single value) | No | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Every non-trivial functional dependency either does not begin with a proper subset of a candidate key or ends with a prime attribute (no partial functional dependencies of non-prime attributes on candidate keys) | No | No | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Every non-trivial functional dependency begins with a superkey or ends with a prime attribute (no transitive functional dependencies of non-prime attributes on candidate keys) | No | No | No | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Every non-trivial functional dependency either begins with a superkey or ends with an elementary prime attribute | No | No | No | No | Yes | Yes | Yes | Yes | Yes | Yes | N/A |
| Every non-trivial functional dependency begins with a superkey | No | No | No | No | No | Yes | Yes | Yes | Yes | Yes | N/A |
| Every non-trivial multivalued dependency begins with a superkey | No | No | No | No | No | No | Yes | Yes | Yes | Yes | N/A |
| Every join dependency has a superkey component[9] | No | No | No | No | No | No | No | Yes | Yes | Yes | N/A |
| Every join dependency has only superkey components | No | No | No | No | No | No | No | No | Yes | Yes | N/A |
| Every constraint is a consequence of domain constraints and key constraints | No | No | No | No | No | No | No | No | No | Yes | N/A |
| Every join dependency is trivial | No | No | No | No | No | No | No | No | No | No | Yes |
