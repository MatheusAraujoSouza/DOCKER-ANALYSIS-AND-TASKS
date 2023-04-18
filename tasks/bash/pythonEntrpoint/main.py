import sys
import logging
import time

if __name__ == "__main__":
    arg = sys.argv[1]
    logging.basicConfig(level=logging.INFO)
    logging.info(f"Received argument from CMD: {arg}")
    time.sleep(100)