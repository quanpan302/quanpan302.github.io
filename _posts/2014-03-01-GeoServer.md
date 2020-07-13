---
title: "GeoServer"
categories:
  - IT
tags:
  - GIS
  - OGC
  - LAMP
last_modified_at: 2014-03-01T12:00:00-15:00
---

[GeoServer](http://geoserver.org/){:target="_blank"} is an open source software server written in Java that allows users to share and edit geospatial data. Designed for interoperability, it publishes data from any major spatial data source using open standards.

GeoServer implements industry standard [Open Geospatial Consortium](https://www.ogc.org/standards){:target="_blank"} (OGC) protocols such as

- [Web Feature Service](https://www.ogc.org/standards/wfs){:target="_blank"} (WFS)
- [Web Map Service](https://www.ogc.org/standards/wms){:target="_blank"} (WMS)
- [Web Coverage Service](https://www.ogc.org/standards/wcs){:target="_blank"} (WCS).
- [OGC Web Services](https://www.ogc.org/standards/owc){:target="_blank"} (OWS) services

Additional formats and publication options are available as extensions including [Web Processing Service](https://www.ogc.org/standards/wps){:target="_blank"} (WPS), and [Web Map Tile Service](https://www.ogc.org/standards/wmts){:target="_blank"} (WMTS).

## Getting started

[web administration interface](https://docs.geoserver.org/latest/en/user/gettingstarted/web-admin-quickstart/index.html){:target="_blank"}

GeoServer has a browser-based web administration interface application used to configure all aspects of GeoServer, from adding and publishing data to changing service settings.

### Access

The web admin interface is accessed via a web browser at: `http://<host>:<port>/geoserver`

For a default installation on a server the link is: `http://localhost:8080/geoserver`

### Log In

The default administration credentials are:

- User name: admin
- Password: geoserver

## Data management

GeoServer connects to and publishes data from a wide variety of sources. This section will discuss how to use the GeoServer web interface to accomplish most common tasks, along with the different data formats served by GeoServer.

### Data settings

- [Workspaces](https://docs.geoserver.org/latest/en/user/data/webadmin/workspaces.html){:target="_blank"}
- [Stores](https://docs.geoserver.org/latest/en/user/data/webadmin/stores.html){:target="_blank"}
- [Layers](https://docs.geoserver.org/latest/en/user/data/webadmin/layers.html){:target="_blank"}
- [Layer Groups](https://docs.geoserver.org/latest/en/user/data/webadmin/layergroups.html){:target="_blank"}

### Vector data

- [Shapefile](https://docs.geoserver.org/latest/en/user/data/vector/shapefile.html){:target="_blank"}
- [Directory of spatial files](https://docs.geoserver.org/latest/en/user/data/vector/directory.html){:target="_blank"}
- [Java Properties](https://docs.geoserver.org/latest/en/user/data/vector/properties.html){:target="_blank"}
- [GeoPackage](https://docs.geoserver.org/latest/en/user/data/vector/geopkg.html){:target="_blank"}
- [GML](https://docs.geoserver.org/latest/en/user/data/vector/gml.html){:target="_blank"}
- [Pregeneralized Features](https://docs.geoserver.org/latest/en/user/data/vector/featurepregen.html){:target="_blank"}

### Raster data

- [GeoTIFF](https://docs.geoserver.org/latest/en/user/data/raster/geotiff.html){:target="_blank"}
- [GTOPO30](https://docs.geoserver.org/latest/en/user/data/raster/gtopo30.html){:target="_blank"}
- [WorldImage](https://docs.geoserver.org/latest/en/user/data/raster/worldimage.html){:target="_blank"}
- [ImageMosaic](https://docs.geoserver.org/latest/en/user/data/raster/imagemosaic/index.html){:target="_blank"}
- [GeoPackage](https://docs.geoserver.org/latest/en/user/data/raster/geopkg.html){:target="_blank"}
- [ArcGrid](https://docs.geoserver.org/latest/en/user/data/raster/arcgrid.html){:target="_blank"}
- [GDAL Image Formats](https://docs.geoserver.org/latest/en/user/data/raster/gdal.html){:target="_blank"}
- [Oracle Georaster](https://docs.geoserver.org/latest/en/user/data/raster/oraclegeoraster.html){:target="_blank"}
- [Postgis Raster](https://docs.geoserver.org/latest/en/user/data/raster/postgisraster.html){:target="_blank"}
- [ImagePyramid](https://docs.geoserver.org/latest/en/user/data/raster/imagepyramid.html){:target="_blank"}
- [Image Mosaic JDBC](https://docs.geoserver.org/latest/en/user/data/raster/imagemosaicjdbc.html){:target="_blank"}
- [Custom JDBC Access for image data](https://docs.geoserver.org/latest/en/user/data/raster/customjdbcaccess.html){:target="_blank"}
- [Coverage Views](https://docs.geoserver.org/latest/en/user/data/raster/coverageview.html){:target="_blank"}

### Databases

- [PostGIS](https://docs.geoserver.org/latest/en/user/data/database/postgis.html){:target="_blank"}
- [H2](https://docs.geoserver.org/latest/en/user/data/database/h2.html){:target="_blank"}
- [B2](https://docs.geoserver.org/latest/en/user/data/database/db2.html){:target="_blank"}
- [MySQL](https://docs.geoserver.org/latest/en/user/data/database/mysql.html){:target="_blank"}
- [Oracle](https://docs.geoserver.org/latest/en/user/data/database/oracle.html){:target="_blank"}
- [Microsoft SQL Server and SQL Azure](https://docs.geoserver.org/latest/en/user/data/database/sqlserver.html){:target="_blank"}
- [Teradata](https://docs.geoserver.org/latest/en/user/data/database/teradata.html){:target="_blank"}
- [Database Connection Pooling](https://docs.geoserver.org/latest/en/user/data/database/connection-pooling.html){:target="_blank"}
- [JNDI](https://docs.geoserver.org/latest/en/user/data/database/jndi.html){:target="_blank"}
- [SQL Views](https://docs.geoserver.org/latest/en/user/data/database/sqlview.html){:target="_blank"}
- [Controlling feature ID generation in spatial databases](https://docs.geoserver.org/latest/en/user/data/database/primarykey.html){:target="_blank"}
- [Custom SQL session start/stop scripts](https://docs.geoserver.org/latest/en/user/data/database/sqlsession.html){:target="_blank"}

### Cascaded service data

- [External Web Feature Server](https://docs.geoserver.org/latest/en/user/data/cascaded/wfs.html){:target="_blank"}
- [Cascaded Web Feature Service Stored Queries](https://docs.geoserver.org/latest/en/user/data/cascaded/stored_query.html){:target="_blank"}
- [External Web Map Server](https://docs.geoserver.org/latest/en/user/data/cascaded/wms.html){:target="_blank"}
- [External Web Map Tile Server](https://docs.geoserver.org/latest/en/user/data/cascaded/wmts.html){:target="_blank"}

### Application schemas

GeoServer provides support for a broad selection of simple feature data stores, including property files, shapefiles, and JDBC data stores such as PostGIS and Oracle Spatial. The app-schema module takes one or more of these simple feature data stores and applies a mapping to convert the simple feature types into one or more complex feature types conforming to a GML application schema.

- [Complex Features](https://docs.geoserver.org/latest/en/user/data/app-schema/complex-features.html){:target="_blank"}
- [Installation](https://docs.geoserver.org/latest/en/user/data/app-schema/installation.html){:target="_blank"}
- [WFS Service Settings](https://docs.geoserver.org/latest/en/user/data/app-schema/wfs-service-settings.html){:target="_blank"}
- [Configuration](https://docs.geoserver.org/latest/en/user/data/app-schema/configuration.html){:target="_blank"}
- [Mapping File](https://docs.geoserver.org/latest/en/user/data/app-schema/mapping-file.html){:target="_blank"}
- [Application Schema Resolution](https://docs.geoserver.org/latest/en/user/data/app-schema/app-schema-resolution.html){:target="_blank"}
- [Supported GML Versions](https://docs.geoserver.org/latest/en/user/data/app-schema/supported-gml-versions.html){:target="_blank"}
- [Secondary Namespaces](https://docs.geoserver.org/latest/en/user/data/app-schema/secondary-namespaces.html){:target="_blank"}
- [CQL functions](https://docs.geoserver.org/latest/en/user/data/app-schema/cql-functions.html){:target="_blank"}
- [Property Interpolation](https://docs.geoserver.org/latest/en/user/data/app-schema/property-interpolation.html){:target="_blank"}
- [Data Stores](https://docs.geoserver.org/latest/en/user/data/app-schema/data-stores.html){:target="_blank"}
- [Feature Chaining](https://docs.geoserver.org/latest/en/user/data/app-schema/feature-chaining.html){:target="_blank"}
- [Polymorphism](https://docs.geoserver.org/latest/en/user/data/app-schema/polymorphism.html){:target="_blank"}
- [Data Access Integration](https://docs.geoserver.org/latest/en/user/data/app-schema/data-access-integration.html){:target="_blank"}
- [WMS Support](https://docs.geoserver.org/latest/en/user/data/app-schema/wms-support.html){:target="_blank"}
- [WFS 2.0 Support](https://docs.geoserver.org/latest/en/user/data/app-schema/wfs-2.0-support.html){:target="_blank"}
- [Joining Support For Performance](https://docs.geoserver.org/latest/en/user/data/app-schema/joining.html){:target="_blank"}
- [Tutorial](https://docs.geoserver.org/latest/en/user/data/app-schema/tutorial.html){:target="_blank"}
- [MongoDB Tutorial](https://docs.geoserver.org/latest/en/user/data/app-schema/mongo-tutorial.html){:target="_blank"}
- [Apache Solr Tutorial](https://docs.geoserver.org/latest/en/user/data/app-schema/solr-tutorial.html){:target="_blank"}

![](/assets/images/posts/2014-03-01-GeoServer/App Schema.png)

## Styling

[Link](https://docs.geoserver.org/latest/en/user/styling/index.html#styling){:target="_blank"}

- Styles
- SLD Styling
- Generating SLD styles with QGIS
- CSS Styling
- YSLD Styling
- MBStyle Styling
- Styling Workshop

## Services

[Link](https://docs.geoserver.org/latest/en/user/services/index.html#services){:target="_blank"}

- WMS, [Web Map Service](https://docs.geoserver.org/latest/en/user/services/wms/index.html){:target="_blank"}
- WFS, [Web Feature Service](https://docs.geoserver.org/latest/en/user/services/wfs/index.html){:target="_blank"}
- WCS, [Web Coverage Service](https://docs.geoserver.org/latest/en/user/services/wcs/index.html){:target="_blank"}
- WPS, [Web Processing Service](https://docs.geoserver.org/latest/en/user/services/wps/index.html){:target="_blank"}
- CSW, [Catalog Services for the Web](https://docs.geoserver.org/latest/en/user/services/csw/index.html){:target="_blank"}

## Filtering

[Link](https://docs.geoserver.org/latest/en/user/filter/index.html#filtering){:target="_blank"}

- in WMS requests, to select which features should be displayed on a map
- in WFS requests, to specify the features to be returned
- in SLD documents, to apply different symbolization to features on a thematic map.
- Supported filter languages
- Filter Encoding Reference
- ECQL Reference
- Filter functions
- Filter Function Reference

## Server configuration

[Link](https://docs.geoserver.org/latest/en/user/configuration/index.html#config){:target="_blank"}

- Status
- Contact Information
- Global Settings
- Image Processing
- Raster Access
- REST Configuration
- Advanced log configuration
- Coordinate Reference System Handling
- Virtual Services
- Demos
- Tools

## GeoServer data directory

[Link](https://docs.geoserver.org/latest/en/user/datadirectory/index.html#datadir){:target="_blank"}

The GeoServer data directory is the location in the file system where GeoServer stores its configuration information.

The configuration defines what data is served by GeoServer, where it is stored, and how services interact with and serve the data. The data directory also contains a number of support files used by GeoServer for various purposes.

For **production use**, it is recommended to define an external data directory (outside the application) to make it easier to upgrade. The Setting the data directory location section describes how to configure GeoServer to use an existing data directory.

- Data directory default location
- Setting the data directory location
- Structure of the data directory
- Migrating a data directory between versions
- Parameterize catalog settings

## Running in a production environment

[Link](https://docs.geoserver.org/latest/en/user/production/index.html#production){:target="_blank"}

GeoServer is geared towards many different uses, from a simple test server to the enterprise-level data server. While many optimizations for GeoServer are set by default, here are some extra considerations to keep in mind when running GeoServer in a production environment.

- [Java Considerations](https://docs.geoserver.org/latest/en/user/production/java.html){:target="_blank"}
- [Container Considerations](https://docs.geoserver.org/latest/en/user/production/container.html){:target="_blank"}
- [Configuration Considerations](https://docs.geoserver.org/latest/en/user/production/config.html){:target="_blank"}
- [Data Considerations](https://docs.geoserver.org/latest/en/user/production/data.html){:target="_blank"}
- [Linux init scripts](https://docs.geoserver.org/latest/en/user/production/linuxscript.html){:target="_blank"}
- [Other Considerations](https://docs.geoserver.org/latest/en/user/production/misc.html){:target="_blank"}
- [Troubleshooting](https://docs.geoserver.org/latest/en/user/production/troubleshooting.html){:target="_blank"}
    - Checking WFS requests
    - Leveraging GeoServer own log
    - Logging service requests
    - Using JDK tools to get stack and memory dumps
    - XStream
- [Make cluster nodes identifiable from the GUI](https://docs.geoserver.org/latest/en/user/production/identify.html){:target="_blank"}

## REST

[Link](https://docs.geoserver.org/latest/en/user/rest/index.html#rest){:target="_blank"}

GeoServer provides a RESTful interface through which clients can retrieve information about an instance and make configuration changes. Using the REST interface’s simple HTTP calls, clients can configure GeoServer without needing to use the Web administration interface.

Operations on resources are implemented with the standard primitives of HTTP: GET to read; and PUT, POST, and DELETE to write changes. Each resource is represented as a URL, such as `http://GEOSERVER_HOME/rest/workspaces/topp`.

- API
- Examples
    - About
    - Fonts
    - Layer groups
    - Layers
    - Security
    - Styles
    - Workspaces
    - Stores
    - Uploading a new image mosaic
    - Updating an image mosaic contents
    - Listing image mosaic details
    - Removing image mosaic granules
    - Uploading an empty mosaic
    - Uploading an app-schema mapping file
    - Listing app-schema store details
    - Uploading a new app-schema mapping configuration file
    - Uploading multiple app-schema mapping files
    - Cleaning schemas on internal MongoDB stores

## Security

[Link](https://docs.geoserver.org/latest/en/user/security/index.html#security){:target="_blank"}

- [Security settings](https://docs.geoserver.org/latest/en/user/security/webadmin/index.html){:target="_blank"}
- [Role system](https://docs.geoserver.org/latest/en/user/security/usergrouprole/index.html){:target="_blank"}
- [Authentication](https://docs.geoserver.org/latest/en/user/security/auth/index.html){:target="_blank"}
- [Passwords](https://docs.geoserver.org/latest/en/user/security/passwd.html){:target="_blank"}
- [Root account](https://docs.geoserver.org/latest/en/user/security/root.html){:target="_blank"}
- [Service Security](https://docs.geoserver.org/latest/en/user/security/service.html){:target="_blank"}
    - [OGC Web Services](https://www.ogc.org/standards/owc){:target="_blank"} (OWS) services
    - REST services
- [Layer security](https://docs.geoserver.org/latest/en/user/security/layer.html){:target="_blank"}
- [REST Security](https://docs.geoserver.org/latest/en/user/security/rest.html){:target="_blank"}
- [Disabling security](https://docs.geoserver.org/latest/en/user/security/disable.html){:target="_blank"}
- [Tutorials](https://docs.geoserver.org/latest/en/user/security/tutorials/index.html){:target="_blank"}

## GeoWebCache

[Link](https://docs.geoserver.org/latest/en/user/geowebcache/index.html#gwc){:target="_blank"}

GeoWebCache is a tiling server. It runs as a proxy between a map client and map server, caching (storing) tiles as they are requested, eliminating redundant request processing and thus saving large amounts of processing time. GeoWebCache is integrated with GeoServer, though it is also available as a standalone product for use with other map servers.

- [GeoWebCache settings](https://docs.geoserver.org/latest/en/user/geowebcache/webadmin/index.html){:target="_blank"}
- [Using GeoWebCache](https://docs.geoserver.org/latest/en/user/geowebcache/using.html){:target="_blank"}
- [Configuration](https://docs.geoserver.org/latest/en/user/geowebcache/config.html){:target="_blank"}
- [Seeding and refreshing](https://docs.geoserver.org/latest/en/user/geowebcache/seeding.html){:target="_blank"}
- [HTTP Response Headers](https://docs.geoserver.org/latest/en/user/geowebcache/responseheaders.html){:target="_blank"}
- [GeoWebCache REST API](https://docs.geoserver.org/latest/en/user/geowebcache/rest/index.html){:target="_blank"}
- [Troubleshooting](https://docs.geoserver.org/latest/en/user/geowebcache/troubleshooting.html){:target="_blank"}
    - Grid misalignment
    - Direct WMS integration

## Extensions

[Link](https://docs.geoserver.org/latest/en/user/extensions/index.html#extensions){:target="_blank"}

Extensions are modules that add functionality to GeoServer. They are installed as add-ons to the base GeoServer installation.

- Key authentication module
- Control flow module
- DXF OutputFormat for WFS and WPS PPIO
- Excel WFS Output Format
- GRIB
- Imagemap
- Importer
- INSPIRE
- JP2K Plugin
- libjpeg-turbo Map Encoder Extension
- Monitoring
- NetCDF
- NetCDF Output Format
- OGR based WFS Output Format
- OGR based WPS Output Format
- GeoServer Printing Module
- Cross-layer filtering
- Vector Tiles
- XSLT WFS output format module
- Web Coverage Service 2.0 Earth Observation extensions
- MongoDB Data Store
- SLD REST Service
- Geofence Plugin
- Geofence Internal Server

## Community modules

[Link](https://docs.geoserver.org/latest/en/user/community/index.html#community){:target="_blank"}

- ArcSDE
- Authentication with OAuth2
- Authentication with Keycloak
- Backup and Restore Documentation
- Catalog Services for the Web (CSW) - ISO Metadata Profile
- DDS/BIL(World Wind Data Formats) Extension
- Dynamic colormap generation
- Elasticsearch data store
- GDAL based WCS Output Format
- GeoMesa data store
- GeoPackage Extension
- GeoStyler Extension
- GeoServer Task Manager
- GHRSST NetCDF output
- GWC Azure BlobStore plugin
- GWC Distributed Caching community module
- GWC S3 BlobStore plugin
- GWC SQLite Plugin
- Importer JDBC storage
- JDBCConfig
- JDBCStore
- JMS based Clustering
- JSON-LD Extension
- MapML
- MBTiles Extension
- Metadata
- Monitoring Hibernate storage
- ncWMS WMS extensions support
- Notification community module Plugin Documentation
- NSG Profile
- OGC API Extension
- OGR datastore
- GSR Extension
- OpenSearch for EO
- Parameters Extractor
- PGRaster
- Quality of Service and Experience Module (QoSE)
- S3 Support for GeoTiff
- SAMLv2 Authentication Filter
- SAP HANA
- Scripting
- SOLR data store
- WFS FlatGeobuf output format
- WMTS Multidimensional
- WPS download community module
- WPS Remote community module

## Tutorials

[Link](https://docs.geoserver.org/latest/en/user/tutorials/index.html#tutorials){:target="_blank"}

