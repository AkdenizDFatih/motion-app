FROM continuumio/miniconda3

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz \
    libssl-dev

RUN mkdir -p /backend
COPY ./backend/requirements.yml /backend/requirements.yml
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/backend/bin:$PATH

ENV PYTHONDONTWRITEBYTECODE 1
RUN echo "source activate backend" >~/.bashrc

COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY ./backend /backend
WORKDIR /backend
