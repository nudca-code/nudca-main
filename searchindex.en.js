var relearn_searchindex = [
  {
    "breadcrumb": "NuDCA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Installation",
    "uri": "/nudca.github.io/installation/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Installation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Installation",
    "uri": "/nudca.github.io/installation/installation/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Two",
    "uri": "/nudca.github.io/tutorial/two/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Heating Rate",
    "uri": "/nudca.github.io/method/heatingrate/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Kilonovae",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Opacity",
    "uri": "/nudca.github.io/method/kilonovae/opacity/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Heating Rate",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thermalization",
    "uri": "/nudca.github.io/method/heatingrate/thermalization/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Tutorials",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Three",
    "uri": "/nudca.github.io/tutorial/three/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tutorials",
    "uri": "/nudca.github.io/tutorial/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Kilonovae",
    "uri": "/nudca.github.io/method/kilonovae/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Methods \u003e  Kilonovae",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Light Curve",
    "uri": "/nudca.github.io/method/kilonovae/lightcurve/index.html"
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
    "content": "",
    "description": "",
    "tags": [],
    "title": "Heat",
    "uri": "/nudca.github.io/tutorial/heating_rate/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Methods",
    "uri": "/nudca.github.io/method/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Examples",
    "uri": "/nudca.github.io/example/index.html"
  },
  {
    "breadcrumb": "NuDCA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "API",
    "uri": "/nudca.github.io/api/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  API",
    "content": "radioactivedecay.decaydata.DEFAULTDATADecayData Default radioactive decay dataset used by radioactivedecay.\nThis dataset currently uses ICRP-107 for decay data and AME2020 and Nubase2020 for atomic mass data.\nVariables DEFAULTDATADecayData\nThe default dataset name for use with radioactivedecay.decaydata.load_dataset. Methods load_dataset(dataset_name=None, dir_path=None, load_sympy=False) Load a decay dataset, either from a set of data files packaged within radioactivedecay, or by specifying a local directory containing the data files.\nParameters:\ndataset_name (str, optional)\nName of the decay dataset (or sub-package directory name). Use \"DEFAULTDATADecayData\" to load the default dataset. dir_path (str or None, optional)\nPath to the directory containing the decay dataset files. Use None to load data that are bundled as a sub-package of radioactivedecay. Default is None. load_sympy (bool, optional)\nLoad SymPy version of the decay data for arbitrary-precision decay calculations. Default is False. Returns:\nA decay dataset used by radioactivedecay.\nReturn type:\nDecayData\nExample from radioactivedecay import decaydata # Load the default decay dataset data = decaydata.load_dataset(\"DEFAULTDATADecayData\")",
    "description": "radioactivedecay.decaydata.DEFAULTDATADecayData Default radioactive decay dataset used by radioactivedecay.\nThis dataset currently uses ICRP-107 for decay data and AME2020 and Nubase2020 for atomic mass data.\nVariables DEFAULTDATADecayData\nThe default dataset name for use with radioactivedecay.decaydata.load_dataset. Methods load_dataset(dataset_name=None, dir_path=None, load_sympy=False) Load a decay dataset, either from a set of data files packaged within radioactivedecay, or by specifying a local directory containing the data files.\nParameters:\ndataset_name (str, optional)\nName of the decay dataset (or sub-package directory name). Use \"DEFAULTDATADecayData\" to load the default dataset. dir_path (str or None, optional)\nPath to the directory containing the decay dataset files. Use None to load data that are bundled as a sub-package of radioactivedecay. Default is None. load_sympy (bool, optional)\nLoad SymPy version of the decay data for arbitrary-precision decay calculations. Default is False. Returns:\nA decay dataset used by radioactivedecay.",
    "tags": [],
    "title": "API",
    "uri": "/nudca.github.io/api/api/index.html"
  },
  {
    "breadcrumb": "NuDCA \u003e  Examples",
    "content": "Importing the package in Python\nDecayDatabase from nudca import load_decay_database fig = decay_database.plot_nuclear_chart() plt.tight_layout() plt.show() dsfa Nuclide Chart",
    "description": "Importing the package in Python\nDecayDatabase from nudca import load_decay_database fig = decay_database.plot_nuclear_chart() plt.tight_layout() plt.show() dsfa Nuclide Chart",
    "tags": [],
    "title": "Example",
    "uri": "/nudca.github.io/example/example/index.html"
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
    "title": "Categories",
    "uri": "/nudca.github.io/categories/index.html"
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
