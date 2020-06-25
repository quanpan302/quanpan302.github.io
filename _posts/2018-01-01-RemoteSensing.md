---
title: "Remote Sensing"
categories:
  - KG
tags:
  - Radar
  - Laser
last_modified_at: 2018-01-02T12:00:00-01:00
---

**Remote sensing** is the acquisition of information about an object or phenomenon without making physical contact with the object and thus in contrast to on-site observation, especially the Earth, [Remote sensing satellite and data overview](https://en.wikipedia.org/wiki/Remote_sensing_satellite_and_data_overview).

Remote sensing is used in numerous fields, including **geography**, **land surveying** and most **Earth science disciplines**, for example:

- hydrology
- ecology
- meteorology
- oceanography
- glaciology
- geology

## Types of data acquisition techniques

Within the scope of the combat against desertification, remote sensing allows researchers to follow up and monitor risk areas in the long term, to determine desertification factors, to support decision-makers in defining relevant measures of environmental management, and to assess their impacts.

![](/assets/images/posts/2018-01-01-RemoteSensing/RemoteSensingIllustration.jpg)

- **Conventional radar** is mostly associated with aerial traffic control, early warning, and certain large scale meteorological data. __Doppler radar__ is used by local law enforcements’ monitoring of speed limits and in enhanced meteorological collection such as wind speed and direction within weather systems in addition to precipitation location and intensity. Other types of __active collection__ includes plasmas in the ionosphere. __Interferometric synthetic aperture radar__ is used to produce precise digital elevation models of large scale terrain (See __RADARSAT, TerraSAR-X, Magellan__).
- **Laser and radar altimeters** on satellites have provided a wide range of data. By measuring the bulges of water caused by gravity, they map features on the seafloor to a resolution of a mile or so. By measuring the height and wavelength of ocean waves, the altimeters measure wind speeds and direction, and surface ocean currents and directions.
- **Ultrasound (acoustic) and radar tide gauges** measure sea level, tides and wave direction in coastal and offshore tide gauges.
- **Light detection and ranging (LIDAR)** is well known in examples of weapon ranging, laser illuminated homing of projectiles. LIDAR is used to detect and measure the concentration of various chemicals in the atmosphere, while __airborne LIDAR__ can be used to measure heights of objects and features on the ground more accurately than with radar technology. Vegetation remote sensing is a principal application of LIDAR.
- **Radiometers and photometers** are the most common instrument in use, collecting __reflected__ and __emitted__ radiation in a wide range of frequencies. The most common are visible and __infrared sensors__, followed by microwave, gamma ray and rarely, ultraviolet. They may also be used to detect the emission spectra of various chemicals, providing data on chemical concentrations in the atmosphere.
- **Radiometers** are also used at night, because artificial light emissions are a key signature of human activity. Applications include remote sensing of population, GDP, and damage to infrastructure from war or disasters.
- **Spectropolarimetric Imaging** has been reported to be useful for target tracking purposes by researchers at the U.S. Army Research Laboratory. They determined that manmade items possess __polarimetric signatures__ that are not found in natural objects. These conclusions were drawn from the imaging of military trucks, like the Humvee, and trailers with their acousto-optic tunable filter dual hyperspectral and spectropolarimetric VNIR Spectropolarimetric Imager.
- **Stereographic pairs of aerial photographs** have often been used to make topographic maps by imagery and terrain analysts in trafficability and highway departments for potential routes, in addition to modelling terrestrial habitat features.
- **Simultaneous multi-spectral platforms** such as Landsat have been in use since the 1970s. These thematic mappers take images in multiple wavelengths of __electro-magnetic radiation (multi-spectral)__ and are usually found on Earth observation satellites, including (for example) the Landsat program or the IKONOS satellite. Maps of land cover and land use from thematic mapping can be used to prospect for minerals, detect or monitor land usage, detect invasive vegetation, deforestation, and examine the health of indigenous plants and crops, including entire farming regions or forests. Prominent scientists using remote sensing for this purpose include Janet Franklin and Ruth DeFries. Landsat images are used by regulatory agencies such as KYDOW to indicate water quality parameters including Secchi depth, chlorophyll a density and total phosphorus content. Weather satellites are used in meteorology and climatology.
- **Hyperspectral imaging** produces an image where each pixel has full spectral information with imaging narrow spectral bands over a contiguous spectral range. Hyperspectral imagers are used in various applications including mineralogy, biology, defence, and environmental measurements.

## Data processing

In order to create sensor-based maps, most remote sensing systems expect to extrapolate sensor data in relation to a reference point including distances between known points on the ground. This depends on the type of sensor used. 

- **Radiometric correction**, Allows avoidance of radiometric errors and distortions. The illumination of objects on the Earth surface is uneven because of different properties of the relief. This factor is taken into account in the method of radiometric distortion correction. Radiometric correction gives a scale to the pixel values, e. g. the monochromatic scale of 0 to 255 will be converted to actual radiance values.
- **Topographic correction (also called terrain correction)**, In rugged mountains, as a result of terrain, the effective illumination of pixels varies considerably. In a remote sensing image, the pixel on the shady slope receives weak illumination and has a low radiance value, in contrast, the pixel on the sunny slope receives strong illumination and has a high radiance value. For the same object, the pixel radiance value on the shady slope will be different from that on the sunny slope. Additionally, different objects may have similar radiance values. These ambiguities seriously affected remote sensing image information extraction accuracy in mountainous areas. It became the main obstacle to further application of remote sensing images. The purpose of topographic correction is to eliminate this effect, recovering the true reflectivity or radiance of objects in horizontal conditions. It is the premise of quantitative remote sensing application.
- **Atmospheric correction**, Elimination of atmospheric haze by rescaling each frequency band so that its minimum value (usually realised in water bodies) corresponds to a pixel value of 0. The digitizing of data also makes it possible to manipulate the data by changing gray-scale values.
