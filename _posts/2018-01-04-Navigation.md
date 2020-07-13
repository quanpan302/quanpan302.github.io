---
title: "Navigation"
categories:
  - KG
tags:
  - GIS
  - GDAL
last_modified_at: 2018-01-04T12:00:00-01:00
---

**Navigation** is a field of study that focuses on the process of monitoring and controlling the movement of a craft or vehicle from one place to another. The field of navigation includes four general categories: land navigation, marine navigation, aeronautic navigation, and space navigation.

## [Navigation Data Standard (NDS)](https://en.wikipedia.org/wiki/Navigation_Data_Standard){:target="_blank"}

The _Navigation Data Standard (**NDS**)_ is a standardized format for automotive-grade [navigation databases](https://en.wikipedia.org/wiki/Map_database_management){:target="_blank"}, jointly developed by automobile manufacturers and suppliers. NDS is an association registered in Germany. Members are automotive OEMs, map data providers, and navigation device/application providers.

The NDS standard is documented regarding database structures, interoperability requirements, and update processes. The NDS association provides various tools that can be used by the NDS members to develop and validate maps:

- NDS SQLite reference engine
- Relational DataScript (RDS tool): Code generator for database access classes in Java and C++
- Certification Bench: Validates NDS databases for compatibility based on detailed test cases and issues certificates
- Investigation Modules: Execution framework for testing NDS databases on target hardware
- Database Inspector: Desktop tool for visualizing NDS databases

![](/assets/images/posts/2018-01-04-Navigation/Overview_buildingblocks-nds-with-HAD.jpg){:target="_blank"}

## [Map database management](https://en.wikipedia.org/wiki/Map_database_management){:target="_blank"}

Map database management systems are software programs designed to efficiently store and recall spatial information. They are widely used in localization and navigation, especially in automotive applications. Moreover, they are playing an increasingly important role in the emerging areas of location-based services, active safety functions and advanced driver-assistance systems. Common to these functions is the requirement for an on-board map database that contains information describing the road network.

Map providers generally collect, aggregate and supply data in a well-defined and documented file format that is specifically intended for information interchange, e.g. [Navteq](https://en.wikipedia.org/wiki/Navteq){:target="_blank"} uses [Standard Interchange Format (SIF)](https://en.wikipedia.org/wiki/Standard_Interchange_Format){:target="_blank"} and [Geographic Data Files (GDF)](https://en.wikipedia.org/wiki/Geographic_Data_Files){:target="_blank"}, while Tele Atlas uses a proprietary form of GDF. It is usually in a plain-text form (ASCII) consisting of fields that are easily parsed and interpreted by the various parties who will handle it. The portable format allows additions, deletions and modifications to be readily performed by simple text-editing programs.

### [Standard Interchange Format (SIF)](https://en.wikipedia.org/wiki/Standard_Interchange_Format){:target="_blank"}

Standard Interchange Format (SIF) is a geospatial data exchange format. A standard or neutral format used to move graphics files between DOD Project 2851 and is currently codified in Content Standard for Digital Geospatial Metadata maintained by the Federal Geographic Data Committee.

### [Geographic Data Files](https://en.wikipedia.org/wiki/Geographic_Data_Files){:target="_blank"}

Geographic Data Files (GDF) is an interchange file format for geographic data. In contrast with generic GIS formats, GDF provides detailed rules for data capture and representation, and an extensive catalog of standard features, attributes and relationships. The most recent extension expanded applicability further towards pedestrian navigation, 3-D map rendering, and advanced driver-assistance systems (ADAS).

The maps in GDF format are provided by many map vendors such as 

- [HERE](https://www.here.com){:target="_blank"}
- [TomTom](https://www.tomtom.com){:target="_blank"}
- [Mapscape BV](https://www.mapscape.eu){:target="_blank"}
- [Automotive Navigation Data, AND](https://www.and.com){:target="_blank"}
- [AutoNavi, 高德地图](https://mobile.amap.com){:target="_blank"}
- [NavInfo, 四维图新](https://www.navinfo.com){:target="_blank"}
- [GeoSmart](https://en.wikipedia.org/wiki/GeoSmart){:target="_blank"}

The specifications of [GDF5.0](https://www.iso.org/standard/54610.html){:target="_blank"} were developed and compiled between 2001 and 2008, involving experts from Australia, Canada, Czech Republic, France, Germany, Japan, Republic of Korea, the Netherlands, and the United States of America. Extensive activities towards harmonization with [ISO/TC211](https://committee.iso.org/home/tc211){:target="_blank"} standards were undertaken. GDF 5.0 was published in July 2011.

Major GDF5.0 enhancements include

- UML model migration & refinements
- harmonization with [linear referencing](https://en.wikipedia.org/wiki/Linear_referencing){:target="_blank"} and geo-spatial web standards
- support for 3-D content and time coordinates
- comprehensive character set and phonetic representations
- new XML and SQL based delivery formats

[Information Exchange between GIS and Geospatial ITS Databases Based on a Generic Model.pdf](/assets/images/posts/2018-01-04-Navigation/Information%20Exchange%20between%20GIS%20and%20Geospatial%20ITS%20Databases%20Based%20on%20a%20Generic%20Model.pdf){:target="_blank"}

## [Geocode](https://en.wikipedia.org/wiki/Geocode)

A geocode is a code that represents a geographic entity (location or object). It is a unique identifier of the entity, to distinguish it from others in a finite set of geographic entities. In general the geocode is a human-readable and short identifier. 

Typical geocodes and entities represented by it:

- Country code and subdivision code. Polygon of the administrative boundaries of a country or a subdivision. The main examples are ISO codes
  - [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2){:target="_blank"} (e.g. AF for Afghanistan or BR for Brazil), and its subdivision conventions, such as AF subdivision codes (e.g. AF-GHO for Ghor province) or BR subdivision codes (e.g. BR-AM for Amazonas state).
- DGG cell ID. Identifier of a cell of a [discrete global grid](https://en.wikipedia.org/wiki/Discrete_global_grid){:target="_blank"}
  - a [Geohash code](https://en.wikipedia.org/wiki/Geohash) (e.g. ~0.023 km<sup>2</sup> cell 6vjyngd at the Brazilian's center)
  - an [OLC code](https://en.wikipedia.org/wiki/Open_Location_Code) (e.g. ~0.004 km<sup>2</sup> cell 58PJ642P+4 at the same point)
- [Postal code](https://en.wikipedia.org/wiki/Postal_code). Polygon of a postal area
  - a [CEP code](https://en.wikipedia.org/wiki/C%C3%B3digo_de_Endere%C3%A7amento_Postal) (e.g. 70040 represents a Brazilian's central area for postal distribution).

## GPS tracking application

- [How to Make a GPS App and Don't Get Lost in the Process](https://agilie.com/en/blog/how-to-make-a-gps-app-and-dont-get-lost-in-the-process){:target="_blank"}