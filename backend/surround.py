def make_filter(name):
    def filter(record):
        return record["extra"].get("name") == name
    return filter