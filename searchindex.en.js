var relearn_searchindex = [
  {
    "breadcrumb": "NuDCA \u003e  nudca API \u003e  kilonovae",
    "content": "",
    "description": "",
    "tags": [],
    "title": "geometry",
    "uri": "/nudca.github.io/api/kilonovae/geometry/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials \u003e  kilonovae",
    "content": "import numpy as np import matplotlib.pyplot as plt from matplotlib.colors import LogNorm from matplotlib import cm from nudca.kilonovae import Geometry, DensityProfile, VelocityProfile geometry = Geometry( velocity_scheme=\"Default\", # density_scheme=\"Metzger2017\", density_scheme=\"Kasen2017\", mass_ejecta=2.e-2, vel_ejecta=0.15 ) vel_profile = VelocityProfile(velocity_scheme='Other', vel_min=-0.3, vel_max=0.3) vel_x, vel_y = np.meshgrid( vel_profile.velocity_distribution(500), vel_profile.velocity_distribution(500) ) # vel_x, vel_y = np.meshgrid( # np.linspace(0, 0.3, 500), # np.linspace(0, 0.3, 500) # ) times = 86400.0 vel_shells = np.sqrt(vel_x**2 + vel_y**2) vel_min, vel_max = 0.1, 0.3 rho_shells = geometry.density_shells(times, vel_shells) rho_shells[(vel_shells \u003c vel_min) | (vel_shells \u003e vel_max)] = np.nan norm = LogNorm(vmin=np.nanmin(rho_shells), vmax=np.nanmax(rho_shells)) fig, ax = plt.subplots(figsize=(8, 8)) cax = ax.imshow( rho_shells, origin='lower', aspect='equal', cmap=cm.plasma, extent=[vel_x.min(), vel_x.max(), vel_y.min(), vel_y.max()], norm=norm ) # ax.set_xlim(-0.3, 0.3) # ax.set_ylim(-0.3, 0.3) ax.set_xlim(0, 0.3) ax.set_ylim(0, 0.3) ax.set_xlabel(r'$v_{x}/c$', fontsize=12) ax.set_ylabel(r'$v_{z}/c$', fontsize=12) cbar = fig.colorbar(cax, ax=ax, orientation='vertical', fraction=0.05, pad=0.05) cbar.set_label(r'$\\rho$ [g/ccm]', fontsize=12) ax.set_title('Density Distribution', fontsize=14) plt.show()",
    "description": "import numpy as np import matplotlib.pyplot as plt from matplotlib.colors import LogNorm from matplotlib import cm from nudca.kilonovae import Geometry, DensityProfile, VelocityProfile geometry = Geometry( velocity_scheme=\"Default\", # density_scheme=\"Metzger2017\", density_scheme=\"Kasen2017\", mass_ejecta=2.e-2, vel_ejecta=0.15 ) vel_profile = VelocityProfile(velocity_scheme='Other', vel_min=-0.3, vel_max=0.3) vel_x, vel_y = np.meshgrid( vel_profile.velocity_distribution(500), vel_profile.velocity_distribution(500) ) # vel_x, vel_y = np.meshgrid( # np.linspace(0, 0.3, 500), # np.linspace(0, 0.3, 500) # ) times = 86400.0 vel_shells = np.sqrt(vel_x**2 + vel_y**2) vel_min, vel_max = 0.1, 0.3 rho_shells = geometry.density_shells(times, vel_shells) rho_shells[(vel_shells \u003c vel_min) | (vel_shells \u003e vel_max)] = np.nan norm = LogNorm(vmin=np.nanmin(rho_shells), vmax=np.nanmax(rho_shells)) fig, ax = plt.subplots(figsize=(8, 8)) cax = ax.imshow( rho_shells, origin='lower', aspect='equal', cmap=cm.plasma, extent=[vel_x.min(), vel_x.max(), vel_y.min(), vel_y.max()], norm=norm ) # ax.set_xlim(-0.3, 0.3) # ax.set_ylim(-0.3, 0.3) ax.set_xlim(0, 0.3) ax.set_ylim(0, 0.3) ax.set_xlabel(r'$v_{x}/c$', fontsize=12) ax.set_ylabel(r'$v_{z}/c$', fontsize=12) cbar = fig.colorbar(cax, ax=ax, orientation='vertical', fraction=0.05, pad=0.05) cbar.set_label(r'$\\rho$ [g/ccm]', fontsize=12) ax.set_title('Density Distribution', fontsize=14) plt.show()",
    "tags": [],
    "title": "Geometry",
    "uri": "/nudca.github.io/tutorial/kilonovae/geometry/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods",
    "content": "Thermalization Radioactive Decay Heating Rate",
    "description": "Thermalization Radioactive Decay Heating Rate",
    "tags": [],
    "title": "Heating Rate",
    "uri": "/nudca.github.io/method/heatingrate/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Installation",
    "content": "​ bash pip install nudca",
    "description": "​ bash pip install nudca",
    "tags": [],
    "title": "Installation",
    "uri": "/nudca.github.io/installation/installation/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "Introduction",
    "description": "Introduction",
    "tags": [],
    "title": "Introduction",
    "uri": "/nudca.github.io/introduction/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Introduction",
    "content": "Introduction nudca is a Python package for radioactive decay calculations.\nThe original goal was to create a light-weight Python package for radioactive decay calculations, with full support for branching decays, multi-step decay chains, and metastable states. By default radioactivedecay uses decay data from ENDF-B-VIII.1. It solves the radioactive decay differential equations analytically using basic linear algebra operations.\nIn order to use radioactivedecay, you will need Python 3.9+ with the Matplotlib, NumPy, Pandas, SciPy, NetworkX, Setuptools and Numba packages installed. The code is platform independent and has been tested on Windows, MacOS and Linux systems.",
    "description": "Introduction nudca is a Python package for radioactive decay calculations.\nThe original goal was to create a light-weight Python package for radioactive decay calculations, with full support for branching decays, multi-step decay chains, and metastable states. By default radioactivedecay uses decay data from ENDF-B-VIII.1. It solves the radioactive decay differential equations analytically using basic linear algebra operations.\nIn order to use radioactivedecay, you will need Python 3.9+ with the Matplotlib, NumPy, Pandas, SciPy, NetworkX, Setuptools and Numba packages installed. The code is platform independent and has been tested on Windows, MacOS and Linux systems.",
    "tags": [],
    "title": "Introduction",
    "uri": "/nudca.github.io/introduction/introduction/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "from nudca import Nuclide Nuclide('Ag-95O').A",
    "description": "from nudca import Nuclide Nuclide('Ag-95O').A",
    "tags": [],
    "title": "Nuclide",
    "uri": "/nudca.github.io/tutorial/nuclide/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Kilonovae",
    "content": "we adopt grey opacity ranging from 1.0 cm2 g−1 to 10.0 cm2 g−1, which we take to be a function of the initial Ye. Our choice is motivated by the study of Tanaka et al. (2018), which showed that bolometric light curves computed assuming grey opacity in this range are in good agreement with those obtained with wavelength-dependent radiation transfer results. We use the following formula to set the opacity: $$ \\kappa = 1.0 + \\frac{9}{1 + \\left(4 Y_{\\mathrm{e}} \\right)^{12}} \\text{ [cm}^{-2}\\text{/g]} $$ For $\\kappa$, we use the results from Tanaka et al. (2020) for Ye ∼ 0.15 − 0.4 (κ for Ye = 0.1 is likely underestimated due to a lack of atomic data for the actinides). For the typical BHNS dynamical ejecta and the thermal CCSNe cases, we estimate κ in this Ye range by fitting an exponential function to the available opacity data to get $$ \\kappa = 211.98 \\exp(-12.33Y_{\\mathrm{e}}) $$",
    "description": "we adopt grey opacity ranging from 1.0 cm2 g−1 to 10.0 cm2 g−1, which we take to be a function of the initial Ye. Our choice is motivated by the study of Tanaka et al. (2018), which showed that bolometric light curves computed assuming grey opacity in this range are in good agreement with those obtained with wavelength-dependent radiation transfer results. We use the following formula to set the opacity: $$ \\kappa = 1.0 + \\frac{9}{1 + \\left(4 Y_{\\mathrm{e}} \\right)^{12}} \\text{ [cm}^{-2}\\text{/g]} $$ For $\\kappa$, we use the results from Tanaka et al. (2020) for Ye ∼ 0.15 − 0.4 (κ for Ye = 0.1 is likely underestimated due to a lack of atomic data for the actinides). For the typical BHNS dynamical ejecta and the thermal CCSNe cases, we estimate κ in this Ye range by fitting an exponential function to the available opacity data to get",
    "tags": [],
    "title": "Opacity",
    "uri": "/nudca.github.io/method/kilonovae/opacity/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  References",
    "content": "References [Amaku et al. (2019)]: M. Amaku, P.R. Pascholati, V.R. Vanin, Decay chain differential equations: Solution through matrix algebra, Computer Physics Communications, Volume 181, Issue 1, 2010, Pages 21-23, https://doi.org/10.1016/j.cpc.2009.08.011.\n[Tanaka et al. (2020)]: Masaomi Tanaka, Daiji Kato, Gediminas Gaigalas, Kyohei Kawaguchi, Systematic opacity calculations for kilonovae, Monthly Notices of the Royal Astronomical Society, Volume 496, Issue 2, August 2020, Pages 1369–1392, https://doi.org/10.1093/mnras/staa1576\n[Wu et al. (2022)]: Zhenyu Wu, Giacomo Ricigliano, Rahul Kashyap, Albino Perego, David Radice, Radiation hydrodynamics modelling of kilonovae with SNEC, Monthly Notices of the Royal Astronomical Society, Volume 512, Issue 1, May 2022, Pages 328–347, https://doi.org/10.1093/mnras/stac399\n[Ekanger et al. (2023)]: Nick Ekanger, Mukul Bhattacharya, Shunsaku Horiuchi, Nucleosynthesis in outflows of compact objects and detection prospects of associated kilonovae, Monthly Notices of the Royal Astronomical Society, Volume 525, Issue 2, October 2023, Pages 2040–2052, https://doi.org/10.1093/mnras/stad2348\n[Barnes et al. (2016)]: Barnes, Jennifer and Kasen, Daniel and Wu, Meng-Ru and Martínez-Pinedo, Gabriel, RADIOACTIVITY AND THERMALIZATION IN THE EJECTA OF COMPACT OBJECT MERGERS AND THEIR IMPACT ON KILONOVA LIGHT CURVES, The Astrophysical Journal, Volume 829, Issue 2, Sep 2016, Pages 110, https://dx.doi.org/10.3847/0004-637X/829/2/110\n[Metzger (2020)]: Metzger, B.D. Kilonovae. Living Rev Relativ 23, 1 (2020). https://doi.org/10.1007/s41114-019-0024-0\n[Hotokezaka \u0026 Nakar (2020)]: Hotokezaka, Kenta and Nakar, Ehud, Radioactive Heating Rate of r-process Elements and Macronova Light Curve, The Astrophysical Journal, Volume 891, Issue 2, Mar 2020, Pages 152, https://dx.doi.org/10.3847/1538-4357/ab6a98\n[Korobkin et al. (2012)]: O. Korobkin, S. Rosswog, A. Arcones, C. Winteler, On the astrophysical robustness of the neutron star merger r-process, Monthly Notices of the Royal Astronomical Society, Volume 426, Issue 3, 1 November 2012, Pages 1940–1949, https://doi.org/10.1111/j.1365-2966.2012.21859.x\n[Rosswog et al. (2024)]: S. Rosswog, O. Korobkin, Heavy Elements and Electromagnetic Transients from Neutron Star Mergers. ANNALEN DER PHYSIK 2024, 536, 2200306. https://doi.org/10.1002/andp.202200306",
    "description": "References [Amaku et al. (2019)]: M. Amaku, P.R. Pascholati, V.R. Vanin, Decay chain differential equations: Solution through matrix algebra, Computer Physics Communications, Volume 181, Issue 1, 2010, Pages 21-23, https://doi.org/10.1016/j.cpc.2009.08.011.\n[Tanaka et al. (2020)]: Masaomi Tanaka, Daiji Kato, Gediminas Gaigalas, Kyohei Kawaguchi, Systematic opacity calculations for kilonovae, Monthly Notices of the Royal Astronomical Society, Volume 496, Issue 2, August 2020, Pages 1369–1392, https://doi.org/10.1093/mnras/staa1576\n[Wu et al. (2022)]: Zhenyu Wu, Giacomo Ricigliano, Rahul Kashyap, Albino Perego, David Radice, Radiation hydrodynamics modelling of kilonovae with SNEC, Monthly Notices of the Royal Astronomical Society, Volume 512, Issue 1, May 2022, Pages 328–347, https://doi.org/10.1093/mnras/stac399",
    "tags": [],
    "title": "References",
    "uri": "/nudca.github.io/references/references/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Heating Rate",
    "content": "In general, the thermalization fraction, $f_{th}$, is a time-dependent quantity that describes the fraction of energy that is absorbed by the ejecta from radioactive processes that includes fission fragments, α particles, β particles, and γ -rays. We assume that the total thermalization efficiency can be approximately described by Barnes et al. 2016 $$\rf_{th}(t) = 0.36 \\left[\\exp(-at) + \\frac{\\ln\\left(1+2bt^{d}\\right)}{2bt^{d}} \\right]\r$$where $a$, $b$, and $d$ are fit coefficients. The fit coefficients are given in Table 1 of Barnes et al. 2016.",
    "description": "In general, the thermalization fraction, $f_{th}$, is a time-dependent quantity that describes the fraction of energy that is absorbed by the ejecta from radioactive processes that includes fission fragments, α particles, β particles, and γ -rays. We assume that the total thermalization efficiency can be approximately described by Barnes et al. 2016 $$\rf_{th}(t) = 0.36 \\left[\\exp(-at) + \\frac{\\ln\\left(1+2bt^{d}\\right)}{2bt^{d}} \\right]\r$$where $a$, $b$, and $d$ are fit coefficients. The fit coefficients are given in Table 1 of Barnes et al. 2016.",
    "tags": [],
    "title": "Thermalization",
    "uri": "/nudca.github.io/method/heatingrate/thermalization/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "DecayDatabase ​ python import matplotlib.pyplot as plt from nudca import load_decay_database decay_database = load_decay_database(data_source='ENDF-B-VIII.1_decay') fig = decay_database.plot_nuclear_chart() plt.tight_layout() plt.show() There may be pirates It is all about the boxes.",
    "description": "DecayDatabase ​ python import matplotlib.pyplot as plt from nudca import load_decay_database decay_database = load_decay_database(data_source='ENDF-B-VIII.1_decay') fig = decay_database.plot_nuclear_chart() plt.tight_layout() plt.show() There may be pirates It is all about the boxes.",
    "tags": [],
    "title": "DecayDatabase",
    "uri": "/nudca.github.io/tutorial/decaydatabase/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "Installation",
    "description": "Installation",
    "tags": [],
    "title": "Installation",
    "uri": "/nudca.github.io/installation/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods",
    "content": "Opacity Light Curve",
    "description": "Opacity Light Curve",
    "tags": [],
    "title": "Kilonovae",
    "uri": "/nudca.github.io/method/kilonovae/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Kilonovae",
    "content": "One-zone Arnett Model Radiation energy dominates over gas energy. In this case, the internal energy density is given by $$ u = a T^{4} $$ while the pressure is given by $$ p = \\frac{1}{3} a T^{4} $$ we can approximate the value of a spatial derivative as some quantity over the characteristic length scale $$ \\frac{\\partial u}{\\partial r} \\simeq -\\frac{u}{r} $$ $$ M_{\\mathrm{ej}} = \\int_{R_{\\min}}^{R_{\\max}} 4\\pi r^{2} \\rho(r, t) \\mathrm{d}{r} $$$$ \\frac{\\mathrm{d}E_{i}}{\\mathrm{d}t} = m_{i}\\dot{Q}_{\\mathrm{eff}}(t) -\\frac{E_{i}}{t} - L_{i}(t) $$$$ L_{i} = \\frac{E_{i}}{t_{\\mathrm{lc},i} + t_{\\mathrm{diff}, i}} $$$$ \\tau_{i} = \\int_{R_{i}}^{\\infty} \\kappa(r)\\rho(r, t) \\mathrm{d}r $$$$ L_{bol} = \\sum L_{i} $$Density Profile $$ \\rho(r, t) = \\rho_{0}(t) \\left( \\frac{r}{R_{\\min}} \\right)^{-n} $$",
    "description": "One-zone Arnett Model Radiation energy dominates over gas energy. In this case, the internal energy density is given by $$ u = a T^{4} $$ while the pressure is given by $$ p = \\frac{1}{3} a T^{4} $$ we can approximate the value of a spatial derivative as some quantity over the characteristic length scale $$ \\frac{\\partial u}{\\partial r} \\simeq -\\frac{u}{r} $$ $$ M_{\\mathrm{ej}} = \\int_{R_{\\min}}^{R_{\\max}} 4\\pi r^{2} \\rho(r, t) \\mathrm{d}{r} $$$$ \\frac{\\mathrm{d}E_{i}}{\\mathrm{d}t} = m_{i}\\dot{Q}_{\\mathrm{eff}}(t) -\\frac{E_{i}}{t} - L_{i}(t) $$$$ L_{i} = \\frac{E_{i}}{t_{\\mathrm{lc},i} + t_{\\mathrm{diff}, i}} $$$$ \\tau_{i} = \\int_{R_{i}}^{\\infty} \\kappa(r)\\rho(r, t) \\mathrm{d}r $$$$ L_{bol} = \\sum L_{i} $$Density Profile $$ \\rho(r, t) = \\rho_{0}(t) \\left( \\frac{r}{R_{\\min}} \\right)^{-n} $$",
    "tags": [],
    "title": "Light Curve",
    "uri": "/nudca.github.io/method/kilonovae/lightcurve/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API \u003e  kilonovae",
    "content": "",
    "description": "",
    "tags": [],
    "title": "opacity",
    "uri": "/nudca.github.io/api/kilonovae/opacity/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials \u003e  kilonovae",
    "content": "import numpy as np import matplotlib.pyplot as plt from nudca.kilonovae.opacity import KNOpacity Ye = np.linspace(0.10, 0.50, 5000) Ye_table = [0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40] kappa_table = [19.5, 32.2, 22.3, 5.60, 5.36, 3.30, 0.96] kappa_tanaka = KNOpacity(opacity_type='Tabular', opacity_method='Tanaka_OneVar')(Ye) kappa_wu = KNOpacity(opacity_type='Formula', opacity_method='Wu2022')(Ye) kappa_ekanger = KNOpacity(opacity_type='Formula', opacity_method='Ekanger2023')(Ye) fig, ax = plt.subplots(figsize=(8,6), dpi=150) ax.plot(Ye, kappa_tanaka, label='Tanaka2020_OneVar') ax.plot(Ye, kappa_wu, label='Wu2022') ax.plot(Ye, kappa_ekanger, label='Ekanger2023') ax.scatter(Ye_table, kappa_table, label='Tanaka2020_Table') ax.set_xlim(0.095, 0.5) ax.set_ylim(1.e-1, 100) ax.set_yscale('log') ax.set_xlabel(r'$Y_{e}$') ax.set_ylabel(r'$\\kappa \\quad [cm^{2} g^{-1}]$') ax.legend() plt.show()",
    "description": "import numpy as np import matplotlib.pyplot as plt from nudca.kilonovae.opacity import KNOpacity Ye = np.linspace(0.10, 0.50, 5000) Ye_table = [0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40] kappa_table = [19.5, 32.2, 22.3, 5.60, 5.36, 3.30, 0.96] kappa_tanaka = KNOpacity(opacity_type='Tabular', opacity_method='Tanaka_OneVar')(Ye) kappa_wu = KNOpacity(opacity_type='Formula', opacity_method='Wu2022')(Ye) kappa_ekanger = KNOpacity(opacity_type='Formula', opacity_method='Ekanger2023')(Ye) fig, ax = plt.subplots(figsize=(8,6), dpi=150) ax.plot(Ye, kappa_tanaka, label='Tanaka2020_OneVar') ax.plot(Ye, kappa_wu, label='Wu2022') ax.plot(Ye, kappa_ekanger, label='Ekanger2023') ax.scatter(Ye_table, kappa_table, label='Tanaka2020_Table') ax.set_xlim(0.095, 0.5) ax.set_ylim(1.e-1, 100) ax.set_yscale('log') ax.set_xlabel(r'$Y_{e}$') ax.set_ylabel(r'$\\kappa \\quad [cm^{2} g^{-1}]$') ax.legend() plt.show()",
    "tags": [],
    "title": "Opacity",
    "uri": "/nudca.github.io/tutorial/kilonovae/opacity/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Heating Rate",
    "content": "Decay Chains Radioactive decay chains describe the sequential transformation of unstable nuclei into more stable ones through a series of radioactive decays. Each nuclide in the chain decays into the next, until a stable nuclide is reached. The mathematical description of these chains is essential for understanding the time evolution of the number of nuclei of each type.\nSystem of Differential Equations The time evolution of the number of nuclei in each stage of the decay chain can be described by a system of coupled first-order differential equations:\n$$ \\begin{cases} \\frac{\\mathrm{d}N_{1}(t)}{\\mathrm{d}t} \u0026= -\\lambda_{1}N_{1}(t) \\\\ \\frac{\\mathrm{d}N_{2}(t)}{\\mathrm{d}t} \u0026= b_{12}\\lambda_{1}N_{1}(t) - \\lambda_{2}N_{2}(t) \\\\ \\frac{\\mathrm{d}N_{3}(t)}{\\mathrm{d}t} \u0026= b_{13}\\lambda_{1}N_{1}(t) + b_{23}\\lambda_{2}N_{2}(t) - \\lambda_{3}N_{3}(t) \\\\ \u0026\\vdots \\\\ \\frac{\\mathrm{d}N_{n}(t)}{\\mathrm{d}t} \u0026= b_{1n}\\lambda_{1}N_{1}(t) + b_{2n}\\lambda_{2}N_{2}(t) + \\cdots + b_{n-1,n}\\lambda_{n-1}N_{n-1}(t) - \\lambda_{n}N_{n}(t) \\end{cases} $$Here:\n$N_i(t)$ is the number of nuclei of type $i$ at time $t$. $\\lambda_i$ is the decay constant for nuclide $i$. $b_{ji}$ is the branching ratio for the decay from nuclide $j$ to nuclide $i$. Matrix Representation The above system can be written in matrix form as:\n$$ \\frac{\\mathrm{d}}{\\mathrm{d}t} \\begin{bmatrix} N_{1}(t) \\\\ N_{2}(t) \\\\ N_{3}(t) \\\\ \\vdots \\\\ N_{i}(t) \\\\ \\vdots \\\\ N_{n}(t) \\end{bmatrix} = \\boldsymbol{A} \\begin{bmatrix} N_{1}(t) \\\\ N_{2}(t) \\\\ N_{3}(t) \\\\ \\vdots \\\\ N_{i}(t) \\\\ \\vdots \\\\ N_{n}(t) \\end{bmatrix} $$where $\\boldsymbol{A}$ is the transition matrix:\n$$ \\boldsymbol{A} = \\begin{bmatrix} -\\lambda_{1} \u0026 \u0026 \u0026 \u0026 \u0026 \u0026 \\\\ b_{12}\\lambda_{1} \u0026 -\\lambda_{2} \u0026 \u0026 \u0026 \u0026 \u0026 \\\\ b_{13}\\lambda_{1} \u0026 b_{23}\\lambda_{2} \u0026 -\\lambda_{3} \u0026 \u0026 \u0026 \u0026 \\\\ \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\ddots \u0026 \u0026 \u0026 \u0026 \\\\ b_{1i}\\lambda_{1} \u0026 b_{2i}\\lambda_{2} \u0026 b_{3i}\\lambda_{3} \u0026 \\cdots \u0026 -\\lambda_{i} \u0026 \u0026 \\\\ \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\ddots \u0026 \\\\ b_{1n}\\lambda_{1} \u0026 b_{2n}\\lambda_{2} \u0026 b_{3n}\\lambda_{3} \u0026 \\cdots \u0026 b_{in}\\lambda_{i} \u0026 \\cdots \u0026 -\\lambda_{n} \\end{bmatrix} $$The elements of the matrix $A_{ij}$ are defined as:\n$$ A_{ij} = \\begin{cases} 0 \u0026 \\text{if } i \u003c j, \\\\ -\\lambda_{i} \u0026 \\text{if } i = j, \\\\ b_{ji}\\lambda_{j} \u0026 \\text{if } i \u003e j. \\end{cases} $$This lower-triangular structure reflects the fact that each nuclide can only be produced by the decay of its precursors.\nGeneral Solution The system can be compactly written as:\n$$ \\frac{\\mathrm{d}\\boldsymbol{N}}{\\mathrm{d}t} = \\boldsymbol{A} \\boldsymbol{N} $$The general solution involves diagonalizing the matrix $\\boldsymbol{A}$, which requires finding its eigenvalues and eigenvectors.\nEigenvalues and Eigenvectors The eigenvalues $\\alpha_j$ of $\\boldsymbol{A}$ are given by:\n$$ \\alpha_{j} = -\\lambda_{j} = A_{jj} \\quad(j = 1,2,3,\\dots,n) $$The corresponding eigenvectors $\\boldsymbol{p}_j$ have the form:\n$$ \\boldsymbol{p}_{j} = \\begin{bmatrix} P_{1j} \\\\ P_{2j} \\\\ P_{3j} \\\\ \\vdots \\\\ P_{ij} \\\\ \\vdots \\\\ P_{nj} \\end{bmatrix} $$where the components $P_{ij}$ satisfy the following recurrence relations:\n$$ \\begin{cases} (A_{11} - A_{jj})P_{1j} \u0026= 0 \\\\ A_{21}P_{1j} + (A_{22} - A_{jj})P_{2j} \u0026= 0 \\\\ A_{31}P_{1j} + A_{32}P_{2j} + (A_{33} - A_{jj})P_{3j} \u0026= 0 \\\\ \\vdots \\\\ A_{n1}P_{1j} + A_{n2}P_{2j} + A_{n3}P_{3j} + \\cdots + (A_{nn} - A_{jj})P_{nj} \u0026= 0 \\end{cases} $$Or, in matrix form:\n$$ \\begin{bmatrix} A_{11} - A_{jj} \u0026 \u0026 \u0026 \u0026 \u0026 \u0026 \\\\ A_{21} \u0026 A_{22} - A_{jj} \u0026 \u0026 \u0026 \u0026 \u0026 \\\\ A_{31} \u0026 A_{32} \u0026 A_{33} - A_{jj} \u0026 \u0026 \u0026 \u0026 \\\\ \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\ddots \u0026 \u0026 \u0026 \u0026 \\\\ A_{i1} \u0026 A_{i2} \u0026 A_{i3} \u0026 \\cdots \u0026 A_{ii} - A_{jj} \u0026 \u0026 \\\\ \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\vdots \u0026 \\ddots \u0026 \\\\ A_{n1} \u0026 A_{n2} \u0026 A_{n3} \u0026 \\cdots \u0026 A_{ni} \u0026 \\cdots \u0026 A_{nn} - A_{jj} \\end{bmatrix} \\begin{bmatrix} P_{1j} \\\\ P_{2j} \\\\ P_{3j} \\\\ \\vdots \\\\ P_{ij} \\\\ \\vdots \\\\ P_{nj} \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ \\vdots \\\\ 0 \\\\ \\vdots \\\\ 0 \\end{bmatrix} $$The explicit solution for $P_{ij}$ is:\n$$ P_{ij} = \\begin{cases} 0 \u0026 \\text{if } i \u003c j, \\\\ 1 \u0026 \\text{if } i = j, \\\\ \\frac{1}{A_{jj} - A_{ii}} \\sum_{k=j}^{i-1} A_{ik}P_{kj} \u0026 \\text{if } i \u003e j. \\end{cases} $$Similarly, the inverse matrix elements $P^{-1}_{ij}$ are given by:\n$$ P^{-1}_{ij} = \\begin{cases} 0 \u0026 \\text{if } i \u003c j, \\\\ 1 \u0026 \\text{if } i = j, \\\\ -\\sum_{k=j}^{i-1} P_{ik}P^{-1}_{kj} \u0026 \\text{if } i \u003e j. \\end{cases} $$ This formalism provides a general framework for analyzing arbitrary radioactive decay chains, including those with branching decays. The matrix approach is particularly powerful for numerical computation and for understanding the structure of the solutions.",
    "description": "Decay Chains Radioactive decay chains describe the sequential transformation of unstable nuclei into more stable ones through a series of radioactive decays. Each nuclide in the chain decays into the next, until a stable nuclide is reached. The mathematical description of these chains is essential for understanding the time evolution of the number of nuclei of each type.\nSystem of Differential Equations The time evolution of the number of nuclei in each stage of the decay chain can be described by a system of coupled first-order differential equations:",
    "tags": [],
    "title": "Radioactive Decay",
    "uri": "/nudca.github.io/method/heatingrate/radioactivedecay/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "DecayDiagram ​ python from nudca.decay_database import load_decay_database from nudca.decay_diagram import DecayDiagram nuclide = 'Ni56' decay_database = load_decay_database(data_source='ENDF-B-VIII.1_decay') decay_diagram = DecayDiagram(nuclide, decay_database) radionuclide = decay_diagram.nuclide half_life = decay_diagram.half_life decay_modes = decay_diagram.decay_modes progeny = decay_diagram.progeny branching_ratios = decay_diagram.branching_ratios Details Radionuclide: Ni-56 Half life: 6.08 d Progeny: ['Co-56'] Decay modes: ['β+\u0026EC'] Branching ratios: [1.0] decay_diagram = DecayDiagram('Ni56', decay_database) fig, axes = decay_diagram.plot_decay_chains() fig.tight_layout() decay_diagram = DecayDiagram('Fe56', decay_database) fig, axes = decay_diagram.plot_reverse_decay_chains() fig.tight_layout()",
    "description": "DecayDiagram ​ python from nudca.decay_database import load_decay_database from nudca.decay_diagram import DecayDiagram nuclide = 'Ni56' decay_database = load_decay_database(data_source='ENDF-B-VIII.1_decay') decay_diagram = DecayDiagram(nuclide, decay_database) radionuclide = decay_diagram.nuclide half_life = decay_diagram.half_life decay_modes = decay_diagram.decay_modes progeny = decay_diagram.progeny branching_ratios = decay_diagram.branching_ratios Details Radionuclide: Ni-56 Half life: 6.08 d Progeny: ['Co-56'] Decay modes: ['β+\u0026EC'] Branching ratios: [1.0] decay_diagram = DecayDiagram('Ni56', decay_database) fig, axes = decay_diagram.plot_decay_chains() fig.tight_layout()",
    "tags": [],
    "title": "DecayDiagram",
    "uri": "/nudca.github.io/tutorial/decaydiagram/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Heating Rate",
    "content": "Radioactive Heating Rate $$ \\dot{q}_{\\mathrm{p}}(t) = \\sum_{i} N_{A} \\lambda_{i}Y_{i}(t)E_{i} \\text{ p} \\in \\{\\alpha, \\beta, \\gamma\\} $$Analytical $$ \\dot{q}(t) = \\dot{\\epsilon}_{0}\\left( \\frac{1}{2} - \\frac{1}{\\pi}\\arctan\\left[\\frac{t-t_{0}}{\\sigma}\\right] \\right)^{\\alpha} $$$$ \\dot{q}(t) = \\dot{\\epsilon}_{0}\\left( \\frac{1}{2} - \\frac{1}{\\pi}\\arctan\\left[\\frac{t-t_{0}}{\\sigma}\\right] \\right)^{\\alpha} \\left( \\frac{1}{2} + \\frac{1}{\\pi}\\arctan\\left[\\frac{t-t_{1}}{\\sigma_{1}}\\right] \\right)^{\\alpha_{1}} + C_{1}e^{-t/\\tau_{1}} + C_{2}e^{-t/\\tau_{2}} + C_{3}e^{-t/\\tau_{3}} $$Effective Heating Rate $$ \\dot{Q}(t) = \\sum_{\\mathrm{p}}f_{\\mathrm{p}}(t)\\dot{q}_{\\mathrm{p}}(t) \\text{ p} \\in \\{\\alpha, \\beta, \\gamma\\} $$",
    "description": "Radioactive Heating Rate $$ \\dot{q}_{\\mathrm{p}}(t) = \\sum_{i} N_{A} \\lambda_{i}Y_{i}(t)E_{i} \\text{ p} \\in \\{\\alpha, \\beta, \\gamma\\} $$Analytical $$ \\dot{q}(t) = \\dot{\\epsilon}_{0}\\left( \\frac{1}{2} - \\frac{1}{\\pi}\\arctan\\left[\\frac{t-t_{0}}{\\sigma}\\right] \\right)^{\\alpha} $$$$ \\dot{q}(t) = \\dot{\\epsilon}_{0}\\left( \\frac{1}{2} - \\frac{1}{\\pi}\\arctan\\left[\\frac{t-t_{0}}{\\sigma}\\right] \\right)^{\\alpha} \\left( \\frac{1}{2} + \\frac{1}{\\pi}\\arctan\\left[\\frac{t-t_{1}}{\\sigma_{1}}\\right] \\right)^{\\alpha_{1}} + C_{1}e^{-t/\\tau_{1}} + C_{2}e^{-t/\\tau_{2}} + C_{3}e^{-t/\\tau_{3}} $$Effective Heating Rate $$ \\dot{Q}(t) = \\sum_{\\mathrm{p}}f_{\\mathrm{p}}(t)\\dot{q}_{\\mathrm{p}}(t) \\text{ p} \\in \\{\\alpha, \\beta, \\gamma\\} $$",
    "tags": [],
    "title": "Heating Rate",
    "uri": "/nudca.github.io/method/heatingrate/heatingrate/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API \u003e  kilonovae",
    "content": "",
    "description": "",
    "tags": [],
    "title": "heating_rate",
    "uri": "/nudca.github.io/api/kilonovae/heatingrate/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API",
    "content": "Nuclide API Reference Info This page documents the nuclide.py module, which provides data structures and utilities for representing and parsing nuclear nuclides. It is part of the NuDCA (Nuclear Decay Chains Astrophysics) package.\nOverview The nuclide.py module defines the Nuclide class for representing nuclear nuclides, as well as supporting functions and exceptions for parsing, validating, and converting nuclide symbols, atomic numbers, and canonical IDs. It enables robust handling of nuclide data in scientific and engineering applications.\nMain Class: Nuclide Represents a nuclear nuclide, providing properties for atomic number (Z), mass number (A), neutron number (N), metastable state, and canonical ID. Supports parsing from string or integer formats and provides equality/hash operations.\nConstructor Nuclide(nuclide: Union[str, int]) nuclide (str or int): Nuclide symbol (e.g. ‘U-235’, ‘235U’, 922350000) or canonical id. Properties Property Type Description Z int Atomic number (number of protons). A int Mass number (protons + neutrons). N int Neutron number (A - Z). state str Metastable state symbol (’’ for ground, ‘M’, ‘N’, …). id int Canonical nuclide ID (zzzaaassss form). nuclide_symbol str Standardized nuclide string (e.g. ‘U-235’). Key Methods Method Description __repr__() String representation of the nuclide. __eq__(other) Equality comparison. __ne__(other) Inequality comparison. __hash__() Hash function for use in sets and dicts. Exception: NuclideStrError Custom exception for invalid nuclide strings, providing context on the error.\nUtility Functions Function Description parse_nuclide(nuclide) Parse a nuclide string or canonical id to standardized format. Z_to_element(Z) Convert atomic number to element symbol. element_to_Z(element_symbol) Convert element symbol to atomic number. get_metastable_symbols() Get allowed metastable state symbols. Usage Example from nudca.nuclide import Nuclide, parse_nuclide n = Nuclide('U-235') print(n.Z) # 92 print(n.A) # 235 print(n.state) # '' print(n.id) # 922350000 # Parse from canonical id n2 = Nuclide(922350000) print(n2.nuclide_symbol) # 'U-235' Notes Supports flexible parsing from various nuclide string formats and canonical IDs. Provides robust error handling for invalid nuclide representations. Includes mappings for all known elements and allowed metastable states. See Also DecayDatabase API DecayMatrix API NucleoDecay API",
    "description": "Nuclide API Reference Info This page documents the nuclide.py module, which provides data structures and utilities for representing and parsing nuclear nuclides. It is part of the NuDCA (Nuclear Decay Chains Astrophysics) package.\nOverview The nuclide.py module defines the Nuclide class for representing nuclear nuclides, as well as supporting functions and exceptions for parsing, validating, and converting nuclide symbols, atomic numbers, and canonical IDs. It enables robust handling of nuclide data in scientific and engineering applications.",
    "tags": [],
    "title": "Nuclide",
    "uri": "/nudca.github.io/api/nuclide/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "Nuclide DecayDatabase DecayDiagram DecayMatrix NucleoDecay kilonovae",
    "description": "Nuclide DecayDatabase DecayDiagram DecayMatrix NucleoDecay kilonovae",
    "tags": [],
    "title": "Tutorials",
    "uri": "/nudca.github.io/tutorial/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API",
    "content": "Info The DecayDatabase class is the core component for accessing and analyzing nuclear decay data in the NuDCA library. It provides efficient access to nuclide properties, decay modes, branching ratios, decay energies, and visualization tools for nuclear charts. This API is designed for scientific computing, nuclear physics, and astrophysics applications.\nOverview DecayDatabase encapsulates a comprehensive database of nuclear decay data, supporting:\nQuerying half-lives, decay modes, progeny, and branching ratios Access to decay energies (electromagnetic, light particle, heavy particle, neutrino, etc.) Visualization of the nuclear chart (N vs Z) with half-life color mapping Fast loading from pre-processed data files (e.g., ENDF-B-VIII.1) The database is typically loaded using the load_decay_database function.\nClass: DecayDatabase class DecayDatabase: def __init__( self, data_source: str, nuclides: np.ndarray, half_life_data: np.ndarray, decay_constants_data: np.ndarray, decay_modes_data: np.ndarray, progeny_data: np.ndarray, branching_ratios_data: np.ndarray, decay_energies_data: np.ndarray ) -\u003e None Key Methods get_nuclide_half_life def get_nuclide_half_life(self, nuclide: str, units: str = 'readable') -\u003e Union[float, str] Returns the half-life of a nuclide in the specified units (‘readable’, ’s’, or original units).\nget_nuclide_decay_modes def get_nuclide_decay_modes(self, nuclide: str) -\u003e List[str] Returns the list of decay modes for the given nuclide.\nget_nuclide_branching_ratios def get_nuclide_branching_ratios(self, nuclide: str) -\u003e List[float] Returns the branching ratios for all decay modes of the nuclide.\nget_nuclide_progeny def get_nuclide_progeny(self, nuclide: str) -\u003e List[str] Returns the list of progeny (daughter nuclides) for the given nuclide.\nget_nuclide_decay_energy def get_nuclide_decay_energy(self, nuclide: str, energy_type: str) -\u003e float Returns the specified type of decay energy for the nuclide. Supported energy_type values:\n‘EM’: Electromagnetic ‘LP’: Light particle ‘HP’: Heavy particle ‘Neutrino’: Neutrino ‘Gamma’, ‘Beta_Minus’, ‘Beta_Plus’, ‘Alpha’, ‘Neutron’, ‘Proton’, ‘Effective_Q’ get_nuclide_total_decay_energy def get_nuclide_total_decay_energy(self, nuclide: str) -\u003e float Returns the total decay energy released (sum of EM, LP, HP, and Neutrino energies).\nplot_nuclear_chart def plot_nuclear_chart(self, figure=None, nuclei_linewidths=0.3, colorbar=False, figsize=(9,6), dpi=300, magic_numbers=[2,8,20,28,50,82,126], **kwargs ) -\u003e plt.figure Plots the nuclear chart (N vs Z) colored by half-life, with magic numbers highlighted. Returns a matplotlib figure.\nFunction: load_decay_database def load_decay_database(data_source: str = 'ENDF-B-VIII.1_decay') -\u003e DecayDatabase Loads a DecayDatabase object from a compressed data file for the specified data source.\nNuclide String Format All nuclide arguments accept standard nuclide strings (e.g., ‘U-238’, ‘Fe56’). The Nuclide class is used internally for validation and parsing. See the Nuclide API for more details.\nRelated Classes Nuclide: Represents a nuclide, providing properties for atomic number (Z), mass number (A), neutron number (N), and metastable state. DecayDatabaseManager: For advanced users, provides tools for loading, sorting, and serializing nuclear decay data files. Usage Example from nudca import load_decay_database db = load_decay_database('ENDF-B-VIII.1_decay') # Query half-life (as readable string and in seconds) print(db.get_nuclide_half_life('U-238')) # e.g., '4.468 billion years' print(db.get_nuclide_half_life('U-238', 's')) # e.g., 1.409e+17 # Get decay modes and branching ratios print(db.get_nuclide_decay_modes('U-238')) # e.g., ['α'] print(db.get_nuclide_branching_ratios('U-238')) # e.g., [1.0] # Get progeny (daughter nuclides) print(db.get_nuclide_progeny('U-238')) # e.g., ['Th-234'] # Get decay energies print(db.get_nuclide_decay_energy('U-238', 'EM')) # Electromagnetic energy print(db.get_nuclide_total_decay_energy('U-238')) # Total decay energy # Plot the nuclear chart fig = db.plot_nuclear_chart() fig.savefig('nuclear_chart.png') See Also Nuclide API DecayDiagram API DecayMatrix API",
    "description": "Where our lookout pretends to spot land while actually napping",
    "tags": [],
    "title": "DecayDatabase",
    "uri": "/nudca.github.io/api/decaydatabase/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "from nudca.decay_database import load_decay_database from nudca.decay_matrix import MatrixBuilder decay_database = load_decay_database() matrix_builder = MatrixBuilder(decay_database) matrix_A = matrix_builder.build_matrix_A() matrix_P = matrix_builder.build_matrix_P(matrix_A) matrix_P_inv = matrix_builder.build_matrix_P_inv(matrix_A, matrix_P) from nudca.decay_matrix import load_decay_matrix decay_matrix = load_decay_matrix() print(decay_matrix)",
    "description": "from nudca.decay_database import load_decay_database from nudca.decay_matrix import MatrixBuilder decay_database = load_decay_database() matrix_builder = MatrixBuilder(decay_database) matrix_A = matrix_builder.build_matrix_A() matrix_P = matrix_builder.build_matrix_P(matrix_A) matrix_P_inv = matrix_builder.build_matrix_P_inv(matrix_A, matrix_P) from nudca.decay_matrix import load_decay_matrix decay_matrix = load_decay_matrix() print(decay_matrix)",
    "tags": [],
    "title": "DecayMatrix",
    "uri": "/nudca.github.io/tutorial/decaymatrix/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials \u003e  kilonovae",
    "content": "import numpy as np import matplotlib.pyplot as plt from nudca.kilonovae import KNeLightCurve times = np.geomspace(1e-3, 1e2, 5000) * 86400 # days t, Lbol = KNeLightCurve( lightcurve_type = 'Luminosity', # ['Luminosity', 'Magnitude'] velocity_scheme= 'Default', # Uniform distribution density_scheme= 'Metzger2017', # ['Metzger2017', 'Kasen2017', 'Wollaeger2018'] thermal_scheme= 'Barnes2016_Default', # ['Barnes2016_Default', 'Barnes2016_1D', 'Barnes2016_2D'] heating_scheme= 'Korobkin2012', # ['Korobkin2012', 'Rosswog2024', 'Table'] # heating_rate_table = (t, q_dot) mass_ejecta = 2.e-3, # units: M_sun vel_ejecta = 0.15, # units: c opacity = 10.0, # ['Wu2022', 'Ekanger2023', 'Tanaka_OneVar', 'Tanaka_FourVar'] # luminosity_distance # units: Mpc # wavelength # units: cm # **kwargs (n_shells ...) )(times=times) fig, ax = plt.subplots() ax.plot(t/86400, Lbol) ax.set_xlim(-0.5, 30) ax.set_ylim(1e37, 1e42) ax.set_yscale('log') ax.set_xlabel('Time [days]') ax.set_ylabel('Lbol [erg]') plt.show() import numpy as np import matplotlib.pyplot as plt from nudca.kilonovae import KNeLightCurve times = np.geomspace(1e-3, 1e2, 5000) * 86400 t, Mv = KNeLightCurve( lightcurve_type='Magnitude', mass_ejecta=2.e-3, # units: M_sun vel_ejecta=0.15, # units: c opacity=10.0, # units: cm^2 / g luminosity_distance = 200, # units: Mpc wavelength = 2e-4, # units: cm )(times=times) fig, ax = plt.subplots() ax.plot(t/86400, Mv) ax.set_xlim(-0.5, 30) ax.set_ylim(20, 40) ax.invert_yaxis() ax.set_xlabel('Time [days]') ax.set_ylabel('Magnitude') plt.show()",
    "description": "import numpy as np import matplotlib.pyplot as plt from nudca.kilonovae import KNeLightCurve times = np.geomspace(1e-3, 1e2, 5000) * 86400 # days t, Lbol = KNeLightCurve( lightcurve_type = 'Luminosity', # ['Luminosity', 'Magnitude'] velocity_scheme= 'Default', # Uniform distribution density_scheme= 'Metzger2017', # ['Metzger2017', 'Kasen2017', 'Wollaeger2018'] thermal_scheme= 'Barnes2016_Default', # ['Barnes2016_Default', 'Barnes2016_1D', 'Barnes2016_2D'] heating_scheme= 'Korobkin2012', # ['Korobkin2012', 'Rosswog2024', 'Table'] # heating_rate_table = (t, q_dot) mass_ejecta = 2.e-3, # units: M_sun vel_ejecta = 0.15, # units: c opacity = 10.0, # ['Wu2022', 'Ekanger2023', 'Tanaka_OneVar', 'Tanaka_FourVar'] # luminosity_distance # units: Mpc # wavelength # units: cm # **kwargs (n_shells ...) )(times=times) fig, ax = plt.subplots() ax.plot(t/86400, Lbol) ax.set_xlim(-0.5, 30) ax.set_ylim(1e37, 1e42) ax.set_yscale('log') ax.set_xlabel('Time [days]') ax.set_ylabel('Lbol [erg]') plt.show()",
    "tags": [],
    "title": "KNeLightCurve",
    "uri": "/nudca.github.io/tutorial/kilonovae/knelightcurve/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API \u003e  kilonovae",
    "content": "",
    "description": "",
    "tags": [],
    "title": "lightcurve",
    "uri": "/nudca.github.io/api/kilonovae/lightcurve/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "Heating Rate Kilonovae",
    "description": "Heating Rate Kilonovae",
    "tags": [],
    "title": "Methods",
    "uri": "/nudca.github.io/method/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API",
    "content": "Info This page documents the decay_diagram.py module, which provides visualization and analysis tools for nuclide decay chains. It is part of the NuDCA (Nuclear Decay Chain Astrophysics) package.\nOverview The DecayDiagram class enables the construction and visualization of nuclear decay chains and their reverse (parent) relationships using networkx and matplotlib. It provides methods to query decay properties and plot decay diagrams for any nuclide in a given decay database.\nClass: DecayDiagram Represents a decay diagram for a specific nuclide, providing methods to visualize decay chains and reverse decay chains.\nConstructor DecayDiagram(nuclide: str, decay_database) nuclide (str): Nuclide symbol (e.g., ‘U-238’). decay_database (DecayDatabase): Instance containing decay data. Properties Property Type Description half_life float or str Half-life of the nuclide (various units). progeny list[str] Daughter nuclides of the nuclide. branching_ratios list[float] Branching ratios for all decay modes. decay_modes list[str] Decay modes for the nuclide. Methods find_parents def find_parents(self, nuclide: str) -\u003e List[str] Find all possible parent nuclides that can decay to the given nuclide.\nget_decay_info def get_decay_info(self, parent: str, daughter: str) -\u003e Optional[Tuple[str, float]] Get decay mode and branching ratio between a parent and daughter nuclide.\nplot_decay_chains def plot_decay_chains(self, ...) Plot the decay chains starting from the nuclide. Returns a matplotlib Figure and Axes.\nplot_reverse_decay_chains def plot_reverse_decay_chains(self, ...) Plot the reverse decay chains (parents) for the nuclide. Returns a matplotlib Figure and Axes.\nplot def plot(self, digraph, max_generation, max_xpos, ...) Plot a custom decay diagram using a provided networkx DiGraph.\nExample Usage from nudca.decay_database import load_decay_database from nudca.decay_diagram import DecayDiagram db = load_decay_database(\"ENDF-B-VIII.1_decay\") diagram = DecayDiagram(\"U-238\", db) # Plot decay chains diagram.plot_decay_chains()[0].show() # Plot reverse decay chains diagram.plot_reverse_decay_chains()[0].show() Notes Requires networkx and matplotlib for plotting. Decay data must be provided via a compatible DecayDatabase instance. See inline docstrings in the source code for advanced plotting options. See Also DecayDatabase API DecayMatrix API",
    "description": "Info This page documents the decay_diagram.py module, which provides visualization and analysis tools for nuclide decay chains. It is part of the NuDCA (Nuclear Decay Chain Astrophysics) package.\nOverview The DecayDiagram class enables the construction and visualization of nuclear decay chains and their reverse (parent) relationships using networkx and matplotlib. It provides methods to query decay properties and plot decay diagrams for any nuclide in a given decay database.",
    "tags": [],
    "title": "DecayDiagram",
    "uri": "/nudca.github.io/api/decaydiagram/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "import numpy as np from nudca import load_decay_database, load_decay_matrix, RadioactiveDecay decay_database = load_decay_database(data_source='ENDF-B-VIII.1_decay') decay_matrix = load_decay_matrix(data_source='ENDF-B-VIII.1_decay') init_Y = {'Kr88': 1.e-5} radioactive_decay = RadioactiveDecay( init_Y, decay_database, decay_matrix ) times = np.geomspace(1.e-2, 1.e3, 10000) * 86400 nuclides, Y = radioactive_decay.decay_abundance(times)",
    "description": "import numpy as np from nudca import load_decay_database, load_decay_matrix, RadioactiveDecay decay_database = load_decay_database(data_source='ENDF-B-VIII.1_decay') decay_matrix = load_decay_matrix(data_source='ENDF-B-VIII.1_decay') init_Y = {'Kr88': 1.e-5} radioactive_decay = RadioactiveDecay( init_Y, decay_database, decay_matrix ) times = np.geomspace(1.e-2, 1.e3, 10000) * 86400 nuclides, Y = radioactive_decay.decay_abundance(times)",
    "tags": [],
    "title": "NucleoDecay",
    "uri": "/nudca.github.io/tutorial/nucleodecay/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "NuDCA Nuclide DecayDatabase DecayDiagram DecayMatrix NucleoDecay kilonovae",
    "description": "NuDCA Nuclide DecayDatabase DecayDiagram DecayMatrix NucleoDecay kilonovae",
    "tags": [],
    "title": "nudca API",
    "uri": "/nudca.github.io/api/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API",
    "content": "DecayMatrix API Reference Info This page documents the decay_matrix.py module, which provides core data structures and utilities for nuclide decay chain calculations. It is part of the NuDCA (Nuclear Decay Chain Astrophysics) package.\nOverview The decay_matrix.py module defines classes and functions to construct, store, and manipulate decay matrices for nuclear decay networks. It is designed for scientific computing and supports analytical and numerical solutions to the Bateman equations.\nMain Classes DecayMatrix Represents the decay matrix and related structures for nuclide decay calculations.\nAttributes:\ndecay_constants: np.ndarray — Array of decay constants for each nuclide. matrix_P: scipy.sparse.csc_matrix — Transformation matrix for Bateman solutions. matrix_P_inv: scipy.sparse.csc_matrix — Inverse of transformation matrix P. initial_abundance: np.ndarray — Initial abundance vector (default: zeros). matrix_Lambda: scipy.sparse.csc_matrix — Diagonal matrix for decay constants (default: zeros). Methods:\n__init__(decay_constants, matrix_P, matrix_P_inv) — Initialize with decay constants and transformation matrices. __repr__() — String representation. __eq__(other) — Equality comparison. __ne__(other) — Inequality comparison. MatrixBuilder Builds matrices representing the decay of nuclides based on decay constants, branching ratios, and decay chains.\nAttributes:\ndecay_database: DecayDatabase — Database containing nuclide decay data. Properties:\nnuclides — List of nuclides. nuclide_index_map — Mapping of nuclide names to indices. matrix_size — Number of nuclides. Key Methods:\nbuild_decay_matrix() — Returns transformation matrix P and its inverse. build_matrix_A() — Constructs the decay matrix A (rates between nuclides). build_matrix_P(matrix_A) — Constructs the transformation matrix P. build_matrix_P_inv(matrix_A, matrix_P) — Constructs the inverse of P. _check_identity() — Checks if P and P_inv form an identity matrix. Utility Functions serialize_decay_matrix(data_source='ENDF-B-VIII.1_decay') Saves the decay matrix P and its inverse to disk as .npz files. load_decay_matrix(data_source='ENDF-B-VIII.1_decay') -\u003e DecayMatrix Loads the decay matrix P and its inverse from disk and returns a DecayMatrix object. _csc_matrix_equal(matrix_a, matrix_b) Helper to compare two sparse matrices for exact equality. Usage Example from nudca.decay_matrix import load_decay_matrix decay_matrix = load_decay_matrix() print(decay_matrix) # Access transformation matrices: P = decay_matrix.matrix_P P_inv = decay_matrix.matrix_P_inv Notes The module relies on SciPy sparse matrices for efficient storage and computation. Decay data is loaded from a DecayDatabase (see related documentation). The Bateman solution is supported via transformation matrices P and P_inv. See Also DecayDatabase API",
    "description": "DecayMatrix API Reference Info This page documents the decay_matrix.py module, which provides core data structures and utilities for nuclide decay chain calculations. It is part of the NuDCA (Nuclear Decay Chain Astrophysics) package.\nOverview The decay_matrix.py module defines classes and functions to construct, store, and manipulate decay matrices for nuclear decay networks. It is designed for scientific computing and supports analytical and numerical solutions to the Bateman equations.",
    "tags": [],
    "title": "DecayMatrix",
    "uri": "/nudca.github.io/api/decaymatrix/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "Geometry Opacity KNeLightCurve",
    "description": "Geometry Opacity KNeLightCurve",
    "tags": [],
    "title": "kilonovae",
    "uri": "/nudca.github.io/tutorial/kilonovae/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API",
    "content": "Info This page documents the nucleo_decay.py module, which provides tools for modeling radioactive decay, heating rates, and nuclide abundance evolution in nuclear astrophysics. It is part of the NuDCA (Nuclear Decay Chain Astrophysics) package.\nOverview The nucleo_decay.py module offers a comprehensive class and utilities for simulating radioactive decay processes, calculating decay heating rates, and managing nuclide abundances in large nuclear decay networks. It supports matrix-based solutions to the Bateman equations and provides import/export and visualization capabilities for scientific workflows.\nMain Class: RadioactiveDecay Represents a radioactive decay network, enabling time evolution, heating rate calculations, and abundance management.\nConstructor RadioactiveDecay( initial_abundance: Dict[str, float], decay_database: DecayDatabase, decay_matrix: DecayMatrix ) initial_abundance (Dict[str, float]): Initial nuclide abundances (by symbol). decay_database (DecayDatabase): Decay data for all nuclides in the network. decay_matrix (DecayMatrix): Matrix representation of the decay network. Properties Property Type Description initial_abundance Dict[str, float] Initial nuclide abundances. decay_database DecayDatabase Decay data for the network. decay_matrix DecayMatrix Matrix representation of the decay network. nuclides List[str] List of nuclide symbols in the network. Key Methods Method Description calculate_nuclide_abundances(decay_times) Compute time evolution of nuclide abundances. decay_heating_rates(decay_times, energy_type=None) Calculate heating rates at given times (optionally by energy type). decay_process(decay_times) Core matrix-based Bateman solution for abundance evolution. plot_heating_rates(decay_times, legend=True, save_path=None, xlim=None, ylim=None, energy_type=None) Plot log-log heating rates vs. time. import_nuclide_abundance(filepath, fmt='csv') Import nuclide abundances from file (CSV, JSON, Excel). export_nuclide_abundance(filepath, fmt='csv') Export current nuclide abundances to file. export_decay_abundance(decay_times, filepath, fmt='csv', index_as_time=True) Export time evolution of abundances to file. Function: calculate_radioactive_heating_rates def calculate_radioactive_heating_rates( decay_constants: np.ndarray, abundances: np.ndarray, decay_energies: np.ndarray ) -\u003e np.ndarray Numba-accelerated function to compute total heating rates from decay constants, abundances, and decay energies.\nUsage Example from nudca import load_decay_database, load_decay_matrix, RadioactiveDecay db = load_decay_database('ENDF-B-VIII.1_decay') dm = load_decay_matrix('ENDF-B-VIII.1_decay') rd = RadioactiveDecay({'Kr88': 1e-5}, db, dm) times = np.geomspace(1e-2, 1e3, 10000) * 86400 nuclides, abundances = rd.calculate_nuclide_abundances(times) heating = rd.decay_heating_rates(times) rd.plot_heating_rates(times) Notes The class supports both analytical and numerical solutions for large decay networks. Heating rates can be calculated for total or specific decay energy types (e.g., ‘beta’, ‘alpha’, ‘gamma’). Import/export supports CSV, JSON, and Excel formats for interoperability. Plotting requires matplotlib. Performance-critical routines are accelerated with Numba. See Also DecayDatabase API DecayMatrix API DecayDiagram API",
    "description": "Info This page documents the nucleo_decay.py module, which provides tools for modeling radioactive decay, heating rates, and nuclide abundance evolution in nuclear astrophysics. It is part of the NuDCA (Nuclear Decay Chain Astrophysics) package.\nOverview The nucleo_decay.py module offers a comprehensive class and utilities for simulating radioactive decay processes, calculating decay heating rates, and managing nuclide abundances in large nuclear decay networks. It supports matrix-based solutions to the Bateman equations and provides import/export and visualization capabilities for scientific workflows.",
    "tags": [],
    "title": "NucleoDecay",
    "uri": "/nudca.github.io/api/nucleodecay/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "References",
    "description": "References",
    "tags": [],
    "title": "References",
    "uri": "/nudca.github.io/references/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  nudca API",
    "content": "geometry opacity heating_rate lightcurve",
    "description": "geometry opacity heating_rate lightcurve",
    "tags": [],
    "title": "kilonovae",
    "uri": "/nudca.github.io/api/kilonovae/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/nudca.github.io/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "NuDCA",
    "uri": "/nudca.github.io/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/nudca.github.io/tags/index.html"
  }
]
