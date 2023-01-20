/* eslint-disable max-len */
/*
Copyright 2019 - 2023, Robin de Gruijter (gruijter@hotmail.com)

This file is part of com.gruijter.powerhour.

com.gruijter.powerhour is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

com.gruijter.powerhour is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with com.gruijter.powerhour.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

const distributions = {
	CUSTOM: [],
	pv_52n_t40s: [
		0.029158943, 0.056731388, 0.094148279, 0.118110522, 0.12480318, 0.119922964,
		0.121108148, 0.114206379, 0.096339271, 0.06491852, 0.037648841, 0.022903564,
	],
	linear: [
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,	0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,	0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,	0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
		0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603, 0.00273972603,
	],
	gas_nl_2023: [
		0.0060015, 0.006084855, 0.006251563, 0.006251563, 0.006168209, 0.005918146, 0.005918146, 0.005751438, 0.005751438, 0.005751438,
		0.005751438, 0.005751438, 0.00558473, 0.00558473, 0.00558473, 0.005751438, 0.005834792, 0.005918146, 0.005834792, 0.005834792,
		0.005918146, 0.0060015, 0.006168209, 0.006168209, 0.006251563, 0.006334917, 0.006084855, 0.0060015, 0.005918146, 0.0060015,
		0.006168209, 0.006168209, 0.0060015, 0.005668084, 0.005668084, 0.005418021, 0.00558473, 0.005834792, 0.005918146, 0.0060015,
		0.0060015, 0.005834792, 0.005751438, 0.005918146, 0.005834792, 0.005668084, 0.005501375, 0.005418021, 0.005418021, 0.005501375,
		0.005501375, 0.00558473, 0.00558473, 0.005418021, 0.005251313, 0.005084604, 0.00500125, 0.005167959, 0.005167959, 0.005251313,
		0.005334667, 0.005334667, 0.005084604, 0.004834542, 0.004917896, 0.004667834, 0.004584479, 0.004501125, 0.004501125, 0.004501125,
		0.004251063, 0.004417771, 0.004417771, 0.004251063, 0.004084354, 0.004084354, 0.004167709, 0.004167709, 0.004251063, 0.004251063,
		0.004167709, 0.004001, 0.003750938, 0.003834292, 0.003834292, 0.003750938, 0.003750938, 0.003500875, 0.003084104, 0.002834042,
		0.002834042, 0.002667334, 0.002834042, 0.003250813, 0.003500875, 0.003334167, 0.002917396, 0.002917396, 0.002583979, 0.002667334,
		0.002750688, 0.002834042, 0.003084104, 0.002750688, 0.002500625, 0.002417271, 0.002500625, 0.002417271, 0.002417271, 0.002083854,
		0.001750438, 0.001667083, 0.001583729, 0.001500375, 0.001583729, 0.001583729, 0.001667083, 0.001750438, 0.001667083, 0.001583729,
		0.001333667, 0.001333667, 0.001333667, 0.001417021, 0.001333667, 0.001333667, 0.001083604, 0.001083604, 0.000916896, 0.000916896,
		0.00100025, 0.00100025, 0.000916896, 0.00100025, 0.00100025, 0.00100025, 0.000916896, 0.000916896, 0.000750188, 0.000666833,
		0.000750188, 0.000750188, 0.000750188, 0.000750188, 0.000666833, 0.000666833, 0.000666833, 0.000666833, 0.000666833, 0.000583479,
		0.000583479, 0.000583479, 0.000500125, 0.000500125, 0.000583479, 0.000583479, 0.000583479, 0.000583479, 0.000583479, 0.000583479,
		0.000500125, 0.000583479, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125,
		0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125,
		0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000416771, 0.000416771, 0.000416771, 0.000416771, 0.000500125,
		0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000416771, 0.000500125, 0.000416771, 0.000416771, 0.000416771,
		0.000416771, 0.000416771, 0.000416771, 0.000500125, 0.000416771, 0.000416771, 0.000416771, 0.000416771, 0.000416771, 0.000416771,
		0.000500125, 0.000416771, 0.000416771, 0.000416771, 0.000416771, 0.000416771, 0.000416771, 0.000500125, 0.000416771, 0.000416771,
		0.000416771, 0.000416771, 0.000416771, 0.000416771, 0.000500125, 0.000500125, 0.000416771, 0.000416771, 0.000500125, 0.000416771,
		0.000416771, 0.000500125, 0.000416771, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125,
		0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000500125, 0.000583479, 0.000583479, 0.000583479, 0.000500125, 0.000583479,
		0.000500125, 0.000500125, 0.000583479, 0.000583479, 0.000583479, 0.000666833, 0.000666833, 0.000666833, 0.000666833, 0.000750188,
		0.000750188, 0.000750188, 0.000750188, 0.000666833, 0.000666833, 0.000666833, 0.000833542, 0.000833542, 0.000833542, 0.000833542,
		0.000833542, 0.000916896, 0.001083604, 0.001333667, 0.001500375, 0.001500375, 0.001583729, 0.001667083, 0.001750438, 0.001750438,
		0.001667083, 0.001667083, 0.001750438, 0.001833792, 0.001917146, 0.001917146, 0.0020005, 0.0020005, 0.002167208, 0.002333917,
		0.002417271, 0.002417271, 0.002417271, 0.002583979, 0.002500625, 0.002583979, 0.002667334, 0.002667334, 0.002583979, 0.002667334,
		0.002750688, 0.002917396, 0.00300075, 0.00300075, 0.003167459, 0.003167459, 0.003084104, 0.00300075, 0.003167459, 0.003334167,
		0.003500875, 0.003500875, 0.003667584, 0.003667584, 0.003834292, 0.003834292, 0.003917646, 0.004001, 0.004001, 0.004167709,
		0.004251063, 0.004334417, 0.004417771, 0.004751188, 0.004751188, 0.004667834, 0.004501125, 0.004667834, 0.004667834, 0.004667834,
		0.004751188, 0.004834542, 0.004917896, 0.00500125, 0.005084604, 0.005167959, 0.005167959, 0.005334667, 0.005334667, 0.005334667,
		0.005418021, 0.005501375, 0.00558473, 0.00558473, 0.005501375, 0.005418021, 0.005501375, 0.00558473, 0.005668084, 0.005668084,
		0.005501375, 0.005418021, 0.005418021, 0.005668084, 0.005834792, 0.005668084, 0.00558473, 0.005334667, 0.005501375, 0.005751438,
		0.005918146, 0.0060015, 0.0060015, 0.005918146, 0.005751438,
	],
	el_nl_2023: [
		0.003896686, 0.00386220200375875, 0.003724266, 0.00375875, 0.00375875, 0.00375875, 0.003965654, 0.004000138, 0.00375875, 0.003655298,
		0.003689782, 0.003655298, 0.003724266, 0.003965654, 0.004000138, 0.003724266, 0.003655298, 0.003655298, 0.003586331, 0.003724266,
		0.003965654, 0.004000138, 0.003724266, 0.003689782, 0.003689782, 0.003586331, 0.003655298, 0.003965654, 0.00393117, 0.003689782,
		0.003620815, 0.003620815, 0.003517363, 0.003551847, 0.003896686, 0.003965654, 0.003655298, 0.003551847, 0.003551847, 0.003482879,
		0.003551847, 0.003827718, 0.003896686, 0.003551847, 0.003344943, 0.003379427, 0.003344943, 0.003344943, 0.003482879, 0.003482879,
		0.003310459, 0.003034587, 0.003069071, 0.003138039, 0.003138039, 0.003310459, 0.003413911, 0.003172523, 0.00296562, 0.003000103,
		0.003103555, 0.003103555, 0.003344943, 0.003517363, 0.003138039, 0.00296562, 0.003069071, 0.003069071, 0.003069071, 0.003310459,
		0.003379427, 0.003034587, 0.002931136, 0.003000103, 0.003000103, 0.00296562, 0.003207007, 0.003172523, 0.00296562, 0.002862168,
		0.0027932, 0.002827684, 0.002758716, 0.00296562, 0.002862168, 0.002655264, 0.00244836, 0.002551812, 0.002551812, 0.00262078,
		0.0027932, 0.0027932, 0.002517328, 0.00244836, 0.002517328, 0.00244836, 0.002517328, 0.002758716, 0.002689748, 0.002551812,
		0.002413876, 0.002379392, 0.002275941, 0.002310424, 0.002551812, 0.002413876, 0.002310424, 0.002172489, 0.002138005, 0.002172489,
		0.002138005, 0.002344908, 0.002275941, 0.002172489, 0.002069037, 0.002069037, 0.002310424, 0.002206973, 0.002344908, 0.002344908,
		0.002138005, 0.002138005, 0.002103521, 0.002138005, 0.002069037, 0.002275941, 0.002241457, 0.002034553, 0.001965585, 0.002000069,
		0.001965585, 0.001965585, 0.002172489, 0.002172489, 0.002000069, 0.001965585, 0.001931101, 0.002172489, 0.001965585, 0.002069037,
		0.002138005, 0.001965585, 0.001931101, 0.001862133, 0.001862133, 0.001793165, 0.001896617, 0.001931101, 0.001931101, 0.001827649,
		0.001827649, 0.001896617, 0.001862133, 0.001931101, 0.001896617, 0.001793165, 0.001758681, 0.001827649, 0.001793165, 0.001827649,
		0.001965585, 0.001931101, 0.001793165, 0.001758681, 0.001827649, 0.001827649, 0.001827649, 0.001862133, 0.001931101, 0.001827649,
		0.001758681, 0.001793165, 0.001827649, 0.001793165, 0.001896617, 0.001896617, 0.001793165, 0.001758681, 0.001758681, 0.001724197,
		0.001724197, 0.001896617, 0.001896617, 0.001793165, 0.001724197, 0.001758681, 0.001724197, 0.001724197, 0.001862133, 0.001931101,
		0.001793165, 0.001758681, 0.001758681, 0.001758681, 0.001724197, 0.001827649, 0.001862133, 0.001724197, 0.001758681, 0.001758681,
		0.001793165, 0.001758681, 0.001896617, 0.001827649, 0.001724197, 0.001724197, 0.001758681, 0.001758681, 0.001758681, 0.001896617,
		0.001793165, 0.001758681, 0.001689713, 0.001724197, 0.001689713, 0.001758681, 0.001931101, 0.001931101, 0.001896617, 0.001793165,
		0.001827649, 0.001862133, 0.001896617, 0.002069037, 0.002103521, 0.002034553, 0.001931101, 0.001931101, 0.002034553, 0.001965585,
		0.002034553, 0.002103521, 0.002000069, 0.001965585, 0.002000069, 0.002000069, 0.002000069, 0.002069037, 0.002206973, 0.002034553,
		0.002034553, 0.002069037, 0.002034553, 0.002069037, 0.002172489, 0.002310424, 0.002069037, 0.002069037, 0.002138005, 0.002103521,
		0.002103521, 0.002241457, 0.002344908, 0.002172489, 0.002172489, 0.002206973, 0.002138005, 0.002172489, 0.002275941, 0.002379392,
		0.002275941, 0.002241457, 0.002241457, 0.002275941, 0.002344908, 0.002379392, 0.002655264, 0.00244836, 0.002379392, 0.002482844,
		0.002586296, 0.00262078, 0.002758716, 0.003000103, 0.002724232, 0.002655264, 0.002758716, 0.002724232, 0.0027932, 0.00296562,
		0.003103555, 0.002862168, 0.002758716, 0.002862168, 0.0027932, 0.002827684, 0.003000103, 0.003069071, 0.002896652, 0.002827684,
		0.002931136, 0.002862168, 0.002931136, 0.003138039, 0.003138039, 0.003069071, 0.002931136, 0.00296562, 0.00296562, 0.003000103,
		0.003275975, 0.003620815, 0.003241491, 0.003241491, 0.003310459, 0.003310459, 0.003310459, 0.003517363, 0.003551847, 0.003344943,
		0.003310459, 0.003413911, 0.003379427, 0.003413911, 0.003620815, 0.003620815, 0.003517363, 0.003413911, 0.003448395, 0.003448395,
		0.003448395, 0.003689782, 0.003689782, 0.003586331, 0.003482879, 0.003448395, 0.003517363, 0.003551847, 0.003827718, 0.003827718,
		0.003689782, 0.003551847, 0.003620815, 0.003724266, 0.003793234, 0.00393117, 0.004034622, 0.003896686, 0.003724266, 0.003827718,
		0.003896686, 0.003965654, 0.004069106, 0.004138074, 0.003896686, 0.003827718, 0.003862202, 0.003827718, 0.003862202, 0.00410359,
		0.004207042, 0.003965654, 0.00393117, 0.003965654, 0.003965654, 0.003896686, 0.004034622, 0.004207042, 0.004207042, 0.004207042,
		0.004069106, 0.00410359, 0.00393117, 0.00393117, 0.003655298,
	],
};

// 1 - 366; 1 = 1/1, 365 = 31/12
const getDayOfYear = (date) => (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0))
	/ 24 / 60 / 60 / 1000;

// get cumulative budget  (0 - 100 %) between from - untill (including) day.
const getBudget = (distribution, yearBudget, untill, from = 1) => {
	if (!distribution || !distributions[distribution]) throw Error('distribution not supported');
	if (!untill || untill < 1 || untill > 366) throw Error('untill day not supported');
	if (from < 1 || from > 366) throw Error('from day not supported');

	// disregard leapyear extra day
	const end = (untill > 365) ? 365 : untill;
	const start = (from > 365) ? 365 : from;

	let multiplier = Number(yearBudget);
	let dist = distributions[distribution];
	if (distribution === 'CUSTOM') {
		dist = yearBudget
			.split(';')
			.map((month) => Number(month));
		multiplier = 1;
	}
	const valid = ((dist.length === 12 || dist.length === 365)) && dist.reduce((prev, cur) => prev && Number.isFinite(cur), true);
	if (!valid) throw Error('distribution has invalid length');
	if (!Number.isFinite(multiplier)) throw Error('Year Budget is invalid');

	// make 365 days array in case of monthly distribution
	if (dist.length === 12) {
		let distTmp = [];
		dist.forEach((target, index) => {
			const daysInMonth = new Date(2023, index + 1, 0).getDate();
			const monthArray = Array(daysInMonth).fill(target / daysInMonth);
			distTmp = distTmp.concat(monthArray);
		});
		dist = distTmp;
	}

	// check for period crossing 2 years
	if (start > end) {
		// from day 1 to end
		const budget1 = dist
			.slice(0, end)
			.reduce((partialSum, a) => partialSum + a, 0);
		// from start to day 365
		const budget2 = dist
			.slice(start - 1, 365)
			.reduce((partialSum, a) => partialSum + a, 0);
		return (budget1 + budget2) * multiplier;
	}
	// otherwise straight up
	const budget = dist
		.slice(start - 1, end)
		.reduce((partialSum, a) => partialSum + a, 0);
	return budget * multiplier;
};

module.exports = { getDayOfYear, getBudget };

// // START TEST HERE
// console.log(getDayOfYear(new Date('2023, 12, 1')));
// console.log(1200 * getBudget('pv_52n_t30s', 365, 1));
